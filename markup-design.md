## 메인 / 코너 개발 마크업 
    - 메인 Layout Url 
    - 코너 Page Url 

## 데이터와 디바이스에대한 조건 처리 내용 설계를 어떻게 할 것인가? 
    - 적응형 웹 


##  어떤 기획(의도/목적)
        어떤 디자인( style )
            어떤 기능 ( interection , dom..)
                어떤 환경( 디바이스, 해상도.. )
                    어떤  사용자 (고객- 임직원, 영업\ 권한) 에게 서비스 제공할 것인가. 


=============================================================================

## 기존 웹서비스는 PSD 화면단위로 페이지를 개발하던 방식 이었다면 
   복지몰 개발마크업은 필요한 구성을 작은 단위로 쪼개서 쪼갠 단위들 공통점 기반으로 묶어 작은 단위로 마크업과 스타일링디자인을 한 후 여러가지 옵션(조건)에 따라 조합하여 페이지를 만들어야한다. 




## 웹 스타일 가이드 초안 


1. ClassNaming  

    1.1 네이밍 활용 
       
       className과 data-* 속성

       class 는 구조 (structure)와 역할 (role)
       data-* 은 속성 (properties)과 상태 (state)
       컨텐츠의 경우 실제 데이타(mockup-json)를 기반으로 확장

    
    1.2 layout-role

      레이아웃을 담당하는 div element는 모두 div-* class 이름을 갖는다.
      div-* class의 경우 display, position, float css 속성을 제어하는데 사용하는것을 추천.

      ## 그외 사용할 수 있는 .div-* 이름들

      center
      list
      item
      tools
      nav
      tabpanel
      tab
      pagination
      *-inner는 자유롭게 사용
      그밖의 커스텀 이름

      ## .div-* 를 대신하여 사용할 수 있는 섹션 키워드들

      div-*
      obj-*
      corner-*
      group-*
      section-*
      nav-*
      aside-*
      header-*
      hb-* (header-banner)  
      main (?)
      fc-* (footer-contentinfo)
      기타 등등

    1.4 서비스 page 내에서 사용하는 클래스 네이밍  ( DB 명명규칙 주제영역 구분 참고 )
      고객센터 - .cst_*
      매장 - .shp_*
      상품 - .prd_*
      주문 - .ord_* 
      결제 - .pay_*
      자산 - .ast_*
      쿠폰 - .cpn_*
      정산 - .cal_*



    1.5 사용할 수 있는 data-*
      
      data-display 'true|false'
      data-role ''
      data-name ''
      data-current ''
      data-index ''
      data-device-type 'MOBILE|TABLET|PC'

      ....


      
     



    1.3 for Example



2. Style 개발 방식 

    2.1 mobile-first 개발 
    2.2 css
        reset.css  
        common.css - 전역으로 사용가능한 style 정의 
                     layout , contents ( heading, form, button, table, List .... ) 요소 등..

        pattern.css - 패턴 중 공통으로 가져 갈 수 있는 style  정의 

        /* device 관련 css*/
            pattern/m.css
            pattern/mt.css
            pattern/t.css
            pattern/tp.css
            pattern/pc.css

        /* bp 관련 css */
            pattern/980.css
            pattern/750.css
            pattern/650.css
            pattern/320.css

        /* 서비스 page */
            page.css - page 마다 적용되어질 style 정의 


   2.3 for example
           common.css
           common/m.css
           common/mt.css
            ....

           corner.css
           corner/m.css
           corner/mt.css
            ....
           corner/980.css
            ....



3. 패턴 라이브러리 정의 

    3.1  Basic rule 

         1) Font 

         2) color  


    3.2 layout  
       
        1) layout type 
             

    3.3 corner 

        1) corner_naming_type
            - Documentation (데이터와 디바이스에대한 조건 정의)
            - 기능 정의 
            - example 


    3.4 contents   
        
         1) heading 
                     
         2) button

                *[data-css="button"] {}
                *[data-css="button"][data-options="default"] {}
                *[data-css="button"][data-options="success"] {}
                *[data-css="button"][data-size="large"] {}
                *[data-css="button"][data-size="medium"] {}

                *[data-css="button-default-large"] {}
                *[data-css^="button-"] {}
                *[data-css^="button-default"] {}
                *[data-css="button-default-large"] {}

     

         3) Table


         4) Form 


         5) pagenation


         6) tab menu 

         7) List 

         8) icons
