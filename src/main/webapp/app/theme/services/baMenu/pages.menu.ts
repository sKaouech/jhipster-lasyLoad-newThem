export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'dashboard',
            icon: 'fa fa-tachometer',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: 'editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'ck_editor',
              }
            }
          }
        ]
      },
      {
        path: 'components',
        data: {
          menu: {
            title: 'components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'tree_view',
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'chartist_js',
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'ui_features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'typography',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'buttons',
              }
            }
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: 'icons',
              }
            }
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: 'modals',
              }
            }
          },
          {
            path: 'slim',
            data: {
              menu: {
                title: 'Slim loading bar',
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'grid',
              }
            }
          },
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'form_elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'form_inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'form_layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'basic_tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'smart_tables',
              }
            }
          },
          {
            path: 'datatables',
            data: {
              menu: {
                title: 'Data Tables',
              }
            }
          },
           {
             path: 'hottables',
             data: {
               menu: {
                 title: 'Hot Tables',
               }
             }
           }
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'google_maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'leaflet_maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'bubble_maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'line_maps',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'register'
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'menu_level_1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'menu_level_1_1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'menu_level_1_2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'menu_level_1_2_1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'external_link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];
