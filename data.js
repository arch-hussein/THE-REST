var APP_DATA = {
  "scenes": [
    {
      "id": "0-training-reception",
      "name": "TRAINING RECEPTION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.405175334211318,
        "pitch": -0.06727595644537132,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.0098655955712985,
          "pitch": -0.07075879595061352,
          "rotation": 0,
          "target": "1-training-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-training-hall",
      "name": "TRAINING HALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9734415887451195,
          "pitch": 0.3026525268916149,
          "rotation": 0,
          "target": "2-inside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-inside",
      "name": "INSIDE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4832784754900903,
          "pitch": -0.011782383146499598,
          "rotation": 0,
          "target": "0-training-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-third-floor",
      "name": "THIRD FLOOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5460792072004281,
          "pitch": -0.07915593293832401,
          "rotation": 0,
          "target": "4-monitoring-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-monitoring-room",
      "name": "MONITORING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.870244794569647,
          "pitch": 0.15245208421957201,
          "rotation": 0,
          "target": "3-third-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "MORE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
