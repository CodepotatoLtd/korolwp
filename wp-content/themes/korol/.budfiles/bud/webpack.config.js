module.exports = {
  "entry": {
    "app": {
      "import": [
        "@scripts/main",
        "@styles/app"
      ]
    },
    "editor": {
      "import": [
        "@scripts/editor",
        "@styles/editor"
      ]
    }
  },
  "bail": true,
  "cache": {
    "name": "bud.production",
    "type": "filesystem",
    "version": "rc5e1ojnj4domyhadrtnueyuz2u_",
    "cacheDirectory": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/.budfiles/cache/webpack",
    "managedPaths": [
      "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules"
    ],
    "buildDependencies": {
      "bud": [
        "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/package.json",
        "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/.editorconfig",
        "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/bud.config.js",
        "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/composer.json",
        "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/jsconfig.json",
        "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/package-lock.json",
        "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/tailwind.config.js",
        "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/theme.json"
      ]
    }
  },
  "context": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol",
  "infrastructureLogging": {
    "console": {
      "Console": {}
    },
    "level": "none"
  },
  "mode": "production",
  "module": {
    "noParse": {},
    "rules": [
      {
        "test": {},
        "exclude": [
          {}
        ],
        "parser": {
          "requireEnsure": false
        }
      },
      {
        "oneOf": [
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/resources"
            ],
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/babel-loader/lib/index.js",
                "options": {
                  "cacheDirectory": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/.budfiles/cache/babel",
                  "presets": [
                    [
                      "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/@babel/preset-env/lib/index.js"
                    ],
                    [
                      "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/@babel/preset-react/lib/index.js"
                    ]
                  ],
                  "plugins": [
                    [
                      "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/@babel/plugin-transform-runtime/lib/index.js",
                      {
                        "helpers": false
                      }
                    ],
                    [
                      "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js"
                    ],
                    [
                      "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js"
                    ],
                    [
                      "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/@babel/plugin-proposal-class-properties/lib/index.js"
                    ]
                  ],
                  "env": {
                    "development": {
                      "compact": false
                    }
                  },
                  "root": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol"
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/resources"
            ],
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/mini-css-extract-plugin/dist/loader.js"
              },
              {
                "loader": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": false
                }
              },
              {
                "loader": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "postcssOptions": {
                    "syntax": "postcss-scss",
                    "plugins": [
                      [
                        "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/postcss-import/index.js"
                      ],
                      [
                        null
                      ],
                      [
                        null
                      ],
                      [
                        "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          }
                        }
                      ]
                    ]
                  },
                  "sourceMap": true
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/resources"
            ],
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/mini-css-extract-plugin/dist/loader.js"
              },
              {
                "loader": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "localIdentName": "[name]__[local]___[hash:base64:5]",
                  "modules": true,
                  "sourceMap": false
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/resources"
            ],
            "type": "asset",
            "generator": {
              "filename": "fonts/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol"
            ],
            "exclude": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol"
            ],
            "exclude": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/js-yaml-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol"
            ],
            "exclude": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/html-loader/dist/cjs.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol"
            ],
            "exclude": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/csv-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol"
            ],
            "exclude": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules"
            ],
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/xml-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol"
            ],
            "exclude": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "include": [
              "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/resources"
            ],
            "use": [
              {
                "loader": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/mini-css-extract-plugin/dist/loader.js"
              },
              {
                "loader": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": false
                }
              },
              {
                "loader": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "postcssOptions": {
                    "syntax": "postcss-scss",
                    "plugins": [
                      [
                        "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/postcss-import/index.js"
                      ],
                      [
                        null
                      ],
                      [
                        null
                      ],
                      [
                        "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          }
                        }
                      ]
                    ]
                  },
                  "sourceMap": true
                }
              },
              {
                "loader": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/resolve-url-loader/index.js",
                "options": {
                  "root": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/resources",
                  "sourceMap": false
                }
              },
              {
                "loader": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/node_modules/sass-loader/dist/cjs.js",
                "options": {
                  "implementation": {
                    "sassNull": {},
                    "sassTrue": {
                      "value": true
                    },
                    "sassFalse": {
                      "value": false
                    },
                    "Logger": {
                      "silent": {}
                    },
                    "info": "dart-sass\t1.52.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.17.1\t(Dart Compiler)\t[Dart]",
                    "types": {},
                    "NULL": {},
                    "TRUE": {
                      "value": true
                    },
                    "FALSE": {
                      "value": false
                    },
                    "default": {
                      "sassNull": {},
                      "sassTrue": {
                        "value": true
                      },
                      "sassFalse": {
                        "value": false
                      },
                      "Logger": {
                        "silent": {}
                      },
                      "info": "dart-sass\t1.52.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.17.1\t(Dart Compiler)\t[Dart]",
                      "types": {},
                      "NULL": {},
                      "TRUE": {
                        "value": true
                      },
                      "FALSE": {
                        "value": false
                      }
                    }
                  },
                  "sourceMap": true
                }
              }
            ]
          }
        ]
      }
    ],
    "unsafeCache": false
  },
  "name": "bud",
  "node": false,
  "output": {
    "assetModuleFilename": "[name].[contenthash:6][ext]",
    "chunkFilename": "[name].[contenthash:6].js",
    "filename": "[name].[contenthash:6].js",
    "path": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/public",
    "pathinfo": false,
    "publicPath": ""
  },
  "optimization": {
    "emitOnErrors": false,
    "minimize": true,
    "minimizer": [
      "...",
      {
        "options": {
          "test": {},
          "parallel": true,
          "minimizer": {
            "options": {
              "preset": [
                "default",
                {
                  "discardComments": {
                    "removeAll": true
                  }
                }
              ]
            }
          }
        }
      }
    ],
    "runtimeChunk": "single",
    "splitChunks": {
      "cacheGroups": {
        "bud": {
          "chunks": "all",
          "test": {},
          "reuseExistingChunk": true,
          "priority": -10
        },
        "vendor": {
          "chunks": "all",
          "test": {},
          "reuseExistingChunk": true,
          "priority": -20
        }
      }
    }
  },
  "parallelism": 150,
  "performance": {
    "hints": false
  },
  "recordsPath": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/.budfiles/bud/modules.json",
  "stats": {
    "preset": "errors-warnings"
  },
  "target": "browserslist:/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/package.json",
  "plugins": [
    {
      "patterns": [
        {
          "from": "images",
          "to": "[name].[contenthash:6][ext]",
          "context": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/resources",
          "noErrorOnMissing": true
        }
      ],
      "options": {}
    },
    {
      "options": {
        "assetHookStage": null,
        "basePath": "",
        "fileName": "manifest.json",
        "filter": null,
        "map": null,
        "publicPath": "",
        "removeKeyHash": {},
        "sort": null,
        "transformExtensions": {},
        "useEntryKeys": false,
        "useLegacyEmit": false,
        "writeToFileEmit": true
      }
    },
    {
      "_sortedModulesCache": {},
      "options": {
        "filename": "[name].[contenthash:6].css",
        "ignoreOrder": false,
        "runtime": true,
        "chunkFilename": "[name].[contenthash:6].css"
      },
      "runtimeOptions": {
        "linkType": "text/css"
      }
    },
    {
      "options": {
        "enabled": true,
        "verbose": false,
        "extensions": {},
        "ignore": [],
        "remove": {}
      },
      "enabled": true,
      "verbose": false
    },
    {
      "options": {
        "emitHtml": false,
        "publicPath": ""
      },
      "plugin": {
        "name": "EntrypointsManifestPlugin",
        "stage": null
      },
      "name": "entrypoints.json"
    },
    {
      "name": "WordPressExternalsWebpackPlugin",
      "stage": null,
      "externals": {
        "type": "window"
      }
    },
    {
      "plugin": {
        "name": "WordPressDependenciesWebpackPlugin",
        "stage": null
      },
      "manifest": {},
      "usedDependencies": {},
      "fileName": "wordpress.json"
    },
    {
      "plugin": {
        "name": "MergedManifestPlugin"
      },
      "file": "entrypoints.json",
      "entrypointsName": "entrypoints.json",
      "wordpressName": "wordpress.json"
    }
  ],
  "resolve": {
    "alias": {
      "@src": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/resources",
      "@dist": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/public",
      "@fonts": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/resources/fonts",
      "@images": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/resources/images",
      "@scripts": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/resources/scripts",
      "@styles": "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/resources/styles"
    },
    "extensions": [
      ".mjs",
      ".cjs",
      ".js",
      ".jsx",
      ".css",
      ".json",
      ".wasm",
      ".yml",
      ".toml",
      ".scss",
      ".sass"
    ],
    "modules": [
      "/Users/treforcoster/development2018/korolwp/wp-content/themes/korol/resources",
      "node_modules"
    ]
  }
}