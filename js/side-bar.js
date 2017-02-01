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

	var Navbar = function(){
		this.nstatus = 'open';
		this.navbar = document.getElementById("nav-bar");
		var nself = this;
		window.addEventListener('scroll',function(event){
			if (window.scrollY !== 0){
				nself.navbar.className = 'nav-bar-hidden';
			}else{
				nself.navbar.className = 'nav-bar';
			}
		})
	}

	var BgRoll = function(){
		var bgGroup = document.getElementsByClassName('top-bg');
		var bgPreIndex = 0;
		var bgNextIndex = 1;
		BgRoll.prototype.switch = function(){
			bgPreIndex = bgNextIndex;
			if (bgNextIndex < bgGroup.length - 1){
				bgNextIndex ++;
			}else{
				bgNextIndex = 0;
			}
			for(var i = 0; i < bgGroup.length; i ++){
				bgGroup[i].id = "";
			}
			bgGroup[bgPreIndex].id = "top-bg-fade";
			bgGroup[bgNextIndex].id = "top-bg-show";
			console.log(bgPreIndex + " " + bgNextIndex);
			console.log(bgGroup[bgPreIndex].id + " " + bgGroup[bgNextIndex].id);
		}
	}

	var sideBar = new Sidebar();
	var navBar = new Navbar();
	var bgRoll = new BgRoll();
	setInterval(bgRoll.switch, 3000);
})();
