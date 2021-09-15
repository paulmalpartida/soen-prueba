var View = function () {
    this.Core = {
    	init: function () {
    		this.app = document.querySelector('.c-app')
    		console.log(this.app)
    	}
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    var viewInstance = new View();
    viewInstance.Core.init()
});
