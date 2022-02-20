(()=>{"use strict";class t{constructor(t,e,o,n){this.title=t,this.description=e,this.dueDate=o,this.priority=n}generate(){const t=document.createElement("div"),e=document.createElement("h2");e.innerHTML=this.title;const o=document.createElement("p");return o.innerHTML=this.description,t.appendChild(e),t.appendChild(o),t}get getTitle(){return this.title}set setTitle(t){this.title=t}get getDescription(){return this.description}set setDescription(t){this.description=t}}t.prototype.generate;class e{todoItems=[];constructor(t){this.name=t}addTodo(t){this.todoItems.push(t)}printProject(){let t=document.createElement("h1");t.innerHTML=this.name,document.body.appendChild(t),this.todoItems.forEach((t=>{let e=new Todo(t.title,t.description,t.dueDate,t.priority);document.body.appendChild(e.generate())}))}}const o=[];!function(n){if(function(t){var e;try{e=window[t];var o="__storage_test__";return e.setItem(o,o),e.removeItem(o),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&e&&0!==e.length}}("localStorage")){let n=localStorage.getItem("projects"),i=JSON.parse(n);for(let n=0;n<i.length;n++){let r=new e(i[n].name);for(let e=0;e<i[n].todoItems.length;e++){let o=i[n].todoItems[e].title,s=i[n].todoItems[e].description,d=i[n].todoItems[e].dueDate,c=i[n].todoItems[e].priority,l=new t(o,s,d,c);r.addTodo(l)}o.push(r)}}else console.log("No local world!")}(),console.log(o)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJtQkFBZSxNQUFNLEVBRW5CQSxZQUFZQyxFQUFPQyxFQUFhQyxFQUFTQyxHQUN2Q0MsS0FBS0osTUFBUUEsRUFDYkksS0FBS0gsWUFBY0EsRUFDbkJHLEtBQUtGLFFBQVVBLEVBQ2ZFLEtBQUtELFNBQVdBLEVBSWxCRSxXQUNFLE1BQU1DLEVBQVdDLFNBQVNDLGNBQWMsT0FFbENDLEVBQVlGLFNBQVNDLGNBQWMsTUFDekNDLEVBQVVDLFVBQVlOLEtBQUtKLE1BRTNCLE1BQU1XLEVBQWtCSixTQUFTQyxjQUFjLEtBTS9DLE9BTEFHLEVBQWdCRCxVQUFZTixLQUFLSCxZQUVqQ0ssRUFBU00sWUFBWUgsR0FDckJILEVBQVNNLFlBQVlELEdBRWRMLEVBSUxPLGVBQ0YsT0FBT1QsS0FBS0osTUFHVmMsYUFBU2QsR0FDWEksS0FBS0osTUFBUUEsRUFHWGUscUJBQ0YsT0FBT1gsS0FBS0gsWUFHVmUsbUJBQWVmLEdBQ2pCRyxLQUFLSCxZQUFjQSxHQUlDLEVBQUtnQixVQUFVWixTQzNDeEIsTUFBTWEsRUFFbkJDLFVBQVksR0FFWnBCLFlBQVlxQixHQUNWaEIsS0FBS2dCLEtBQU9BLEVBSWRDLFFBQVFmLEdBQ05GLEtBQUtlLFVBQVVHLEtBQUtoQixHQUl0QmlCLGVBQ0UsSUFBSUMsRUFBY2pCLFNBQVNDLGNBQWMsTUFDekNnQixFQUFZZCxVQUFZTixLQUFLZ0IsS0FDN0JiLFNBQVNrQixLQUFLYixZQUFZWSxHQUUxQnBCLEtBQUtlLFVBQVVPLFNBQVFDLElBQ3JCLElBQUlDLEVBQVUsSUFBSUMsS0FBS0YsRUFBSzNCLE1BQU8yQixFQUFLMUIsWUFBYTBCLEVBQUt6QixRQUFTeUIsRUFBS3hCLFVBQ3hFSSxTQUFTa0IsS0FBS2IsWUFBWWdCLEVBQVF2QixnQkNoQnhDLE1BQU15QixFQUFXLElBcUNqQixTQUFjQyxHQUNaLEdBbkNGLFNBQTBCQyxHQUN4QixJQUFJQyxFQUNKLElBQ0lBLEVBQVVDLE9BQU9GLEdBQ2pCLElBQUlHLEVBQUksbUJBR1IsT0FGQUYsRUFBUUcsUUFBUUQsRUFBR0EsR0FDbkJGLEVBQVFJLFdBQVdGLElBQ1osRUFFWCxNQUFNRyxHQUNGLE9BQU9BLGFBQWFDLGVBRUwsS0FBWEQsRUFBRUUsTUFFUyxPQUFYRixFQUFFRSxNQUdTLHVCQUFYRixFQUFFbEIsTUFFUywrQkFBWGtCLEVBQUVsQixPQUVEYSxHQUE4QixJQUFuQkEsRUFBUVEsUUFjeEJDLENBQWlCLGdCQUFpQixDQUNwQyxJQUFJQyxFQUFPQyxhQUFhQyxRQXlCdkIsWUF4QkdDLEVBQU9DLEtBQUtDLE1BQU1MLEdBRXRCLElBQUssSUFBSU0sRUFBRSxFQUFHQSxFQUFFSCxFQUFLTCxPQUFRUSxJQUFLLENBQ2hDLElBQUlDLEVBQWMsSUFBSWhDLEVBQVk0QixFQUFLRyxHQUFHN0IsTUFDMUMsSUFBSyxJQUFJZSxFQUFFLEVBQUdBLEVBQUVXLEVBQUtHLEdBQUc5QixVQUFVc0IsT0FBUU4sSUFBSyxDQUM3QyxJQUFJZ0IsRUFBWUwsRUFBS0csR0FBRzlCLFVBQVVnQixHQUFHbkMsTUFDakNvRCxFQUFXTixFQUFLRyxHQUFHOUIsVUFBVWdCLEdBQUdsQyxZQUNoQ29ELEVBQVdQLEVBQUtHLEdBQUc5QixVQUFVZ0IsR0FBR2pDLFFBQ2hDb0QsRUFBZVIsRUFBS0csR0FBRzlCLFVBQVVnQixHQUFHaEMsU0FDcENvRCxFQUFXLElBQUksRUFBS0osRUFBV0MsRUFBVUMsRUFBVUMsR0FDdkRKLEVBQVk3QixRQUFRa0MsR0FFdEJ6QixFQUFTUixLQUFLNEIsU0FJaEJNLFFBQVFDLElBQUksbUJBUWhCQyxHQUNBRixRQUFRQyxJQUFJM0IsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBUb2RvXG4gIGdlbmVyYXRlKCkge1xuICAgIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRvZG9UaXRsZS5pbm5lckhUTUwgPSB0aGlzLnRpdGxlO1xuXG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRvZG9EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSB0aGlzLmRlc2NyaXB0aW9uO1xuXG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIHRvZG9JdGVtO1xuICB9XG5cbiAgLy8gR2V0L1NldFxuICBnZXQgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICBzZXQgc2V0VGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cblxuICBnZXQgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlID0gVG9kby5wcm90b3R5cGUuZ2VuZXJhdGU7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb1Byb2plY3Qge1xuXG4gIHRvZG9JdGVtcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgLy8gQWRkIG5ldyB0b2RvIGl0ZW0gdG8gcHJvamVjdFxuICBhZGRUb2RvKHRvZG9JdGVtKSB7XG4gICAgdGhpcy50b2RvSXRlbXMucHVzaCh0b2RvSXRlbSk7XG4gIH1cblxuICAvLyBQcmludCBwcm9qZWN0IHRvZG9zXG4gIHByaW50UHJvamVjdCgpIHtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHByb2plY3ROYW1lLmlubmVySFRNTCA9IHRoaXMubmFtZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgIHRoaXMudG9kb0l0ZW1zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKHRvZG8udGl0bGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uZHVlRGF0ZSwgdG9kby5wcmlvcml0eSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld1RvZG8uZ2VuZXJhdGUoKSk7XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgVG9kb1Byb2plY3QgZnJvbSBcIi4vdG9kb1Byb2plY3RcIjtcblxuaW1wb3J0IGxvYWROYXZiYXIgZnJvbSBcIi4vbmF2YmFyXCI7XG5cbmNvbnN0IHByb2plY3RzID0gW107XG5cbi8vIEZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBsb2NhbCBzdG9yYWdlIGlzIGF2YWlsYWJsZVxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIHZhciBzdG9yYWdlO1xuICB0cnkge1xuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgIHZhciB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY2F0Y2goZSkge1xuICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgfVxufVxuXG4vLyBTYXZlIGFuZCBsb2FkIGEgdG9kbyBpbiBvciBmcm9tIGFuIGFycmF5IG9mIFRvZG8gb2JqZWN0c1xuZnVuY3Rpb24gc2F2ZSgpIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnTm8gbG9jYWwgd29ybGQhJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZChzdG9yYWdlTmFtZSkge1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICBsZXQgdGV4dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VOYW1lKTtcbiAgICBsZXQgdGVtcCA9IEpTT04ucGFyc2UodGV4dCk7XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8dGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRlbXBQcm9qZWN0ID0gbmV3IFRvZG9Qcm9qZWN0KHRlbXBbaV0ubmFtZSk7XG4gICAgICBmb3IgKGxldCB4PTA7IHg8dGVtcFtpXS50b2RvSXRlbXMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgbGV0IHRlbXBUaXRsZSA9IHRlbXBbaV0udG9kb0l0ZW1zW3hdLnRpdGxlO1xuICAgICAgICBsZXQgdGVtcERlc2MgPSB0ZW1wW2ldLnRvZG9JdGVtc1t4XS5kZXNjcmlwdGlvbjtcbiAgICAgICAgbGV0IHRlbXBEYXRlID0gdGVtcFtpXS50b2RvSXRlbXNbeF0uZHVlRGF0ZTtcbiAgICAgICAgbGV0IHRlbXBQcmlvcml0eSA9IHRlbXBbaV0udG9kb0l0ZW1zW3hdLnByaW9yaXR5O1xuICAgICAgICBsZXQgdGVtcFRvZG8gPSBuZXcgVG9kbyh0ZW1wVGl0bGUsIHRlbXBEZXNjLCB0ZW1wRGF0ZSwgdGVtcFByaW9yaXR5KTtcbiAgICAgICAgdGVtcFByb2plY3QuYWRkVG9kbyh0ZW1wVG9kbyk7XG4gICAgICB9XG4gICAgICBwcm9qZWN0cy5wdXNoKHRlbXBQcm9qZWN0KTtcbiAgICB9XG5cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIk5vIGxvY2FsIHdvcmxkIVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBydW4oKSB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZE5hdmJhcigpKTtcbn1cblxubG9hZCgncHJvamVjdHMnKTtcbmNvbnNvbGUubG9nKHByb2plY3RzKTsiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwidGhpcyIsImdlbmVyYXRlIiwidG9kb0l0ZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0b2RvVGl0bGUiLCJpbm5lckhUTUwiLCJ0b2RvRGVzY3JpcHRpb24iLCJhcHBlbmRDaGlsZCIsImdldFRpdGxlIiwic2V0VGl0bGUiLCJnZXREZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwicHJvdG90eXBlIiwiVG9kb1Byb2plY3QiLCJ0b2RvSXRlbXMiLCJuYW1lIiwiYWRkVG9kbyIsInB1c2giLCJwcmludFByb2plY3QiLCJwcm9qZWN0TmFtZSIsImJvZHkiLCJmb3JFYWNoIiwidG9kbyIsIm5ld1RvZG8iLCJUb2RvIiwicHJvamVjdHMiLCJzdG9yYWdlTmFtZSIsInR5cGUiLCJzdG9yYWdlIiwid2luZG93IiwieCIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZSIsIkRPTUV4Y2VwdGlvbiIsImNvZGUiLCJsZW5ndGgiLCJzdG9yYWdlQXZhaWxhYmxlIiwidGV4dCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0ZW1wIiwiSlNPTiIsInBhcnNlIiwiaSIsInRlbXBQcm9qZWN0IiwidGVtcFRpdGxlIiwidGVtcERlc2MiLCJ0ZW1wRGF0ZSIsInRlbXBQcmlvcml0eSIsInRlbXBUb2RvIiwiY29uc29sZSIsImxvZyIsImxvYWQiXSwic291cmNlUm9vdCI6IiJ9