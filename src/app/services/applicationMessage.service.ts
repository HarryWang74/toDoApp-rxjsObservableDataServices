import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationMessageService {

   constructor() { 
      this.windowRef = window;
    }
    private windowRef: any;

  //this.topics = {};


  subscribe = function(topic, listener) : any {
	// use a global object so that angular 1 and 5 can communicate
	if (!this.windowRef.topics){
		this.windowRef.topics = {};
	}

	// Create the topic's object if not yet created
    if (!this.windowRef.topics.hasOwnProperty.call(this.windowRef.topics, topic)) {
		this.windowRef.topics[topic] = [];
	}

    // Add the listener to queue
    var index = this.windowRef.topics[topic].push(listener) - 1;

    // Provide handle back for removal of topic
    return {
        remove: () => {
            delete this.windowRef.topics[topic][index];
        }
    };
  }

  publish = function(topic, info) {
	if (!this.windowRef.topics){
		this.windowRef.topics = {};
	}
	// If the topic doesn't exist, or there's no listeners in queue, just leave
    if (this.windowRef.topics.hasOwnProperty.call(this.windowRef.topics, topic)) {

		// Cycle through topics queue, fire!
		this.windowRef.topics[topic].forEach(function (item) {
			item(info != undefined ? info : {});
		});
	}
  }

}