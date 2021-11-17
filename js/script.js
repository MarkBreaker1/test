function Resize() {
      
        if(document.querySelector('.task-class').offsetWidth > 1100) {
          document.querySelector('.task-class').classList.remove('small-pc');
        } else {
          document.querySelector('.task-class').classList.add('small-pc');
        }
        if(document.querySelector('.task-class').offsetWidth > 992) {
          document.querySelector('.task-class').classList.remove('tablet');
        } else {
          document.querySelector('.task-class').classList.add('tablet');
        }
        if(document.querySelector('.task-class').offsetWidth > 768) {
          document.querySelector('.task-class').classList.remove('mobile');
        } else {
          document.querySelector('.task-class').classList.add('mobile');
        }
				}
      document.addEventListener('DOMContentLoaded', Resize);
      window.addEventListener('resize', Resize);