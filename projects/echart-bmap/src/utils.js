//bmap相关配置
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

//城市地图中心点，暂定前端定死
const cityCenter = {
  '上海市': [121.246201,31.391196],
  '成都市': [104.006232,30.680649],
  '江山市': [118.659998,28.692458],
  '北京市': [116.402056,39.915219],
  '重庆市': [106.553716,29.557677],
  '常州市': [119.97928,31.792487],
  '深圳市': [114.058063,22.544777],
  '丽水市': [119.919359,28.451889],
  '无锡市': [120.310905,31.593704],
  '苏州市': [120.446733,31.226637],
  '长沙市': [113.006274,28.201887],   
	'武汉市': [114.388582,30.645168],
	'镇江市': [119.429482,32.190188],
	'南京市': [118.801741,32.069876],
	'衢州市': [118.861221,28.968209]
}
export { mapStyle, cityCenter };