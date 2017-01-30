(function(){
	var Sidebar = function(){
		this.status = 'open';
		this.barBody = document.getElementById("side-bar");
		this.cross = document.getElementById("cross");
		var self = this;
		this.cross.addEventListener('click', function(event){
			if(event.target !== self.barBody){
				self.trigerSwitch();
			}
		})
	};
		Sidebar.prototype.close = function(){
			this.status = 'close';
			this.barBody.className = 'side-bar-closed';
			this.cross.className = 'cross-out';

		}
		Sidebar.prototype.open = function(){
			this.status = 'open';
			this.barBody.className = 'side-bar-opened';
			this.cross.className = 'cross-in';
		}
		Sidebar.prototype.trigerSwitch = function(){
			if (this.status === 'open'){
				this.close();
			}else {
				this.open();
			}
		}
	var sideBar = new Sidebar();
})();