
       
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 1); 
      

       
        function updateCountdown() {
           
            const now = new Date().getTime();
            
           
            const distance = endDate - now;

            // Если время истекло
            if (distance < 0) {
                document.querySelector('.promo-banner h2').textContent = '⏰ Акція завершена!';
                document.querySelector('.promo-text').textContent = 'Слідкуйте за новими пропозиціями!';
                document.querySelector('.countdown').style.display = 'none';
                return;
            }

          
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            
            
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            
            
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            
            
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            
            document.getElementById('days').textContent = days < 10 ? '0' + days : days;
            document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
            document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
            document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
        }

        
        updateCountdown ();
        
        
        
        setInterval(updateCountdown, 1000);

        
