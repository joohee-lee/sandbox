# layout 
~~~
.site-header
	.header-logo
	.navigation-menu
		.navigation-menu-item
		.navigation-menu-item
		.navigation-menu-item
		...



.site-content
	.article
		.h1
		p
		.h2
		


.stie-footer
	.footer


~~~
# Grid


# components
	
	## nav

		.nav
			.nav-item
			.nav-link 


	## breadcrumb
		nav
			ol.breadcrumb
				li.breadcrumb-item 
				li.breadcrumb-item 

	
	## Button 
		button.btn 
			.btn-primary
			.btn-secondary
			.btn-danger
			.btn-warning
			.btn-info
			.btn-dark
			.btn-link 



	## card 
		
		card
			inner-card
				.card-image
					img
					span.card-title

				.card-content
					p

				.card-action
					a	



		card
			card-img-top
			card-header
			card-body
				.card-title
				.card-text
				.card-link 


        
        ##carousel 

        		.carousel
        			.carousel-inner
        			
        				.carousel-item active
        				.carousel-item
        				.carousel-item


        			.carousel-control
        				.prev
        				.next		


        			.carousel-indicators
        				.list
        					.item active



        ## dropdown 
        		.dropdown-menu
        			.dropdown-item
        			.dropdown-item
        			.dropdown-item
        			...




	      ## List


      .list
        .list-item 
        .list-item
        .list-item
        ...


      .list-group
        .list-group-item 
        .list-group-item
        .list-group-item
        ...


      state 
       - active
       - disabled


      ## pagination 

        nav
          .pagination
            .pagination-item 
              .pagination-link

            .pagination-item active (current)
              .pagination-link	

            ...
