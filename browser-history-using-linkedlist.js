class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
}
  
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    add(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
}
  
   
class BrowserHistory {
    constructor() {
        this.history = new LinkedList();
        this.current = null;
    }
    
    visit(url) {
        // Add the new page to the history and set it as the current page
        this.history.add(url);
        this.current = this.history.tail;
    }
    
    goBack() {
        if (this.current && this.current.prev) {
            this.current = this.current.prev;
        }
    }
    
    goForward() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
        }
    }
    
    getCurrentPage() {
        return this.current ? this.current.data : null;
    }
}
      
// Example usage:
const browser = new BrowserHistory();

browser.visit('https://www.example.com/page1');
browser.visit('https://www.example.com/page2');
browser.visit('https://www.example.com/page3');



console.log(browser.getCurrentPage()); // Output: https://www.example.com/page3

browser.goBack();
console.log(browser.getCurrentPage()); // Output: https://www.example.com/page2

browser.goForward();
console.log(browser.getCurrentPage()); // Output: https://www.example.com/page3
        