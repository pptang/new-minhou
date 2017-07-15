const homePage = `
  <div class="carousel_box">
	  <div id="myCarousel" class="carousel slide" data-ride="carousel">
  	<!-- Indicators -->
  		<ol class="carousel-indicators">
    	  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    	  <li data-target="#myCarousel" data-slide-to="1"></li>
    	  <li data-target="#myCarousel" data-slide-to="2"></li>
  		</ol>

  	<!-- Wrapper for slides -->
  	  <div class="carousel-inner">
    	  <div class="item active">
     		  <img style="height: 650px;width: 100%" src="carepic1.jpg" alt="1">
     		  <div class="carousel-caption">
       		  <h3>標題</h3>
       		  <p>內容</p>
     		  </div>
    	  </div>

        <div class="item">
     		  <img style="height: 650px;width: 100%" src="carepic2.jpg" alt="2">
     		  <div class="carousel-caption">
       		  <h3>標題</h3>
       		  <p>內容</p>
     	    </div>
        </div>

        <div class="item">
     		  <img style="height: 650px;width: 100%" src="carepic3.jpg" alt="3">
     		  <div class="carousel-caption">
       		  <h3>標題</h3>
       		  <p>內容</p>
     		  </div>
        </div>
  	  </div>

  	<!-- Left and right controls -->
  		<a class="left carousel-control" href="#myCarousel" data-slide="prev">
    	<span class="glyphicon glyphicon-chevron-left"></span>
    	<span class="sr-only">Previous</span>
 		  </a>
 		  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    	<span class="glyphicon glyphicon-chevron-right"></span>
    	<span class="sr-only">Next</span>
  		</a>
	  </div>
	</div>
`;