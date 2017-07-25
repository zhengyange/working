const mapStyle = {
      'styleJson': [
        {
          'featureType': 'water',
          'elementType': 'all',
          'stylers': {
            'color': '#0C2129'
          }
        },
        {
          'featureType': 'land',
          'elementType': 'geometry',
          'stylers': {
            'color': '#0C1115'
          }
        },
        {
          'featureType': 'highway',
          'elementType': 'all',
          'stylers': {
            'visibility': 'off'
          }
        },
        // {
        //   'featureType': 'arterial',
        //   'elementType': 'labels',
        //   'stylers': {
        //     'visibility': 'off'
        //   }
        // },
        {
          'featureType': 'arterial',
          'elementType': 'geometry.fill',
          'stylers': {
            'color': '#0C1115'
          }
        },
        {
          'featureType': 'arterial',
          'elementType': 'geometry.stroke',
          'stylers': {
            'color': '#0b3d51'
          }
        },
        {
          'featureType': 'local',
          'elementType': 'geometry',
          'stylers': {
            'color': '#0C1115',
            'visibility': 'off'
          }
        },
        {
          'featureType': 'railway',
          'elementType': 'all',
          'stylers': {
            'color': '#0C1115',
            'visibility': 'off'
          }
        },
        {
          'featureType': 'railway',
          'elementType': 'geometry.stroke',
          'stylers': {
            'color': '#08304b',
            'visibility': 'off'
          }
        },
        {
          'featureType': 'subway',
          'elementType': 'all',
          'stylers': {
            'lightness': -70,
            'visibility': 'off'
          }
        },
        {
          'featureType': 'building',
          'elementType': 'geometry.fill',
          'stylers': {
            'color': '#0C1115',
            'visibility': 'off'
          }
        },
        {
          'featureType': 'all',
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#857f7f',
            'visibility': 'off'
          }
        },
        {
          'featureType': 'all',
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#0C1115',
            'visibility': 'off'
          }
        },
        {
          'featureType': 'building',
          'elementType': 'geometry',
          'stylers': {
            'color': '#022338',
            'visibility': 'off'
          }
        },
        {
          'featureType': 'green',
          'elementType': 'geometry',
          'stylers': {
            'color': '#062032'
          }
        },
        {
          'featureType': 'boundary',
          'elementType': 'all',
          'stylers': {
            'color': '#0E3540'
          }
        },
        {
          'featureType': 'manmade',
          'elementType': 'all',
          'stylers': {
            'color': '#022338'
          }
        },
        {
          'featureType': 'label',
          'elementType': 'all',
          'stylers': {
            'visibility': 'off'
          }
        }, 
        {
          'featureType': 'poi',
          'elementType': 'all',
          'stylers': {
              'visibility': 'off'
          }
        }
      ]
    }

export { mapStyle }