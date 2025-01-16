export default {
  "asset": {
    "version": "2.0",
    "generator": "Three.js GLTFExporter"
  },
  "scenes": [
    {
      "nodes": [0],
      "name": "Scene"
    }
  ],
  "nodes": [
    {
      "children": [1, 2, 3, 4, 5, 6],
      "name": "car",
      "translation": [0, 0, 0]
    },
    {
      "name": "body",
      "mesh": 0,
      "translation": [0, 0.5, 0],
      "scale": [2, 0.5, 4]
    },
    {
      "name": "cabin",
      "mesh": 1,
      "translation": [0, 1.2, 0],
      "scale": [1.5, 0.5, 2]
    },
    {
      "name": "wheel_fl",
      "mesh": 2,
      "translation": [-1, 0.3, 1],
      "rotation": [0, 0, Math.PI/2]
    },
    {
      "name": "wheel_fr",
      "mesh": 2,
      "translation": [1, 0.3, 1],
      "rotation": [0, 0, Math.PI/2]
    },
    {
      "name": "wheel_bl",
      "mesh": 2,
      "translation": [-1, 0.3, -1],
      "rotation": [0, 0, Math.PI/2]
    },
    {
      "name": "wheel_br",
      "mesh": 2,
      "translation": [1, 0.3, -1],
      "rotation": [0, 0, Math.PI/2]
    }
  ],
  "meshes": [
    {
      "primitives": [{
        "attributes": {
          "POSITION": 0,
          "NORMAL": 1
        },
        "indices": 2,
        "material": 0
      }]
    },
    {
      "primitives": [{
        "attributes": {
          "POSITION": 3,
          "NORMAL": 4
        },
        "indices": 5,
        "material": 1
      }]
    },
    {
      "primitives": [{
        "attributes": {
          "POSITION": 6,
          "NORMAL": 7
        },
        "indices": 8,
        "material": 2
      }]
    }
  ],
  "materials": [
    {
      "name": "car_body",
      "pbrMetallicRoughness": {
        "baseColorFactor": [0.8, 0.1, 0.1, 1],
        "metallicFactor": 0.9,
        "roughnessFactor": 0.1
      }
    },
    {
      "name": "car_glass",
      "pbrMetallicRoughness": {
        "baseColorFactor": [0.1, 0.1, 0.1, 1],
        "metallicFactor": 1.0,
        "roughnessFactor": 0.0
      }
    },
    {
      "name": "car_wheel",
      "pbrMetallicRoughness": {
        "baseColorFactor": [0.1, 0.1, 0.1, 1],
        "metallicFactor": 0.5,
        "roughnessFactor": 0.5
      }
    }
  ]
} 