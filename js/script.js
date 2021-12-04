var data = [
  {
    "menu": {
      "id": "1",
      "title": "Menu 1",
      "item": [
       {
         "text": "Lorem İpsum",
         "url": "#",
         "title": "1"
       },
       {
         "text": "Lorem İpsum",
         "url": "#",
         "title": "2"
       },
       {
         "text": "Lorem İpsum",
         "url": "#",
         "title": "3"
       },
       {
         "text": "Lorem İpsum",
         "url": "#",
         "title": "4"
       },
       {
         "text": "Lorem İpsum",
         "url": "#",
         "title": "5"
       }
      ]
    }
  },
   {
     "menu": {
      "id": "2",
      "title": "Menu 2",
      "item": [
        {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "1"
        },
        {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "2"
        },
        {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "3"
        },
        {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "4"
        },
        {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "5"
        }
      ]
     }
   },
   {
     "menu": {
      "id": "3",
      "title": "Menu 3",
      "item": [
        {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "1"
        },
        {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "2"
        },
        {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "3"
        },
        {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "4"
        },
        {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "5"
        }
      ]
     }
   },
   {
     "menu": {
      "id": "4",
      "title": "Menu 4",
      "item": [
        {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "1"
        },
        {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "2"
        },
        {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "3"
        },
        {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "4"
        },
        {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "5"
        }
      ]
     }
   },
    {
      "menu": {
       "id": "5",
       "title": "Menu 5",
       "item": [
         {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "1"
         },
         {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "2"
         },
         {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "3"
         },
         {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "4"
         },
         {
           "text": "Lorem İpsum",
           "url": "#",
           "title": "5"
         }
       ]
      }
    }
];

$('#ottomanslider').ottomanslider();

// caret: 'bigcaret',
// animate: true,
// padLeft: 10,
// padRight: 10,
// padTop: 10,
// padBottom: 10,
// padding: 0,
// copyTitle: false
$('#goTop').goTop(); 
$('#goTop').goTop({

  // container element to place the scroll to top button
  container: '',

  // The amount of pixels the page must be scrolled down before the arrow is displayed.
  appear: 200,

  // how long the animation will run when scrolling to the top of the page.
  scrolltime: 800,

  // The CSS classes used to display the arrow.
  src: "fas fa-chevron-up",

  // The width of the arrow.
  width: 45,

  // The location where the arrow will be shown.
  // "right" or "left"
  place: "right",

  // how long the animation will run when fading in to opaque.
  fadein: 500,

  //  how long the animation will run when fading out to transparent.
  fadeout: 500,

  // Sets the transparency level for the arrow, 
  // where 1 is not transparent at all, 
  // 0.5 is 50% see-through and 
  // 0 is completely transparent.
  opacity: 0.5,

  // The percentage amount indicating how far away the arrow is from the bottom, left, or right, 
  // depending on the value of place.
  marginX: 2,

  // The percentage amount indicating how far away the arrow is from the top or bottom, 
  // depending on the value of place.
  marginY: 2,

  // The CSS z-index property
  zIndex: 9

});

