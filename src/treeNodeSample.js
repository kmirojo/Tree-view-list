const treeNodeSample = [
  {
    id: "layer-1",
    meta: {
      collapsed: true,
      label: "Layer 1"
    },
    parentId: null,
    children: [
      {
        id: "layer-1-1",
        parentId: "layer-1",
        meta: {
          collapsed: true,
          label: "Layer 1-1"
        },
        children: []
      }
    ]
  },
  {
    id: "layer-3",
    meta: {
      collapsed: true,
      label: "Layer 3"
    },
    parentId: null,
    children: []
  },
  {
    id: "layer-2",
    meta: {
      collapsed: true,
      label: "Layer 2"
    },
    parentId: null,
    children: [
      {
        id: "layer-2-1",
        parentId: "layer-2",
        meta: {
          collapsed: true,
          label: "Layer 2-1"
        },
        children: [
          {
            id: "layer-2-1-1",
            parentId: "layer-2-1",
            meta: {
              collapsed: true,
              label: "Layer 2-1-1"
            },
            children: [
              {
                id: "layer-2-1-1-1",
                parentId: "layer-2-1-1",
                meta: {
                  collapsed: true,
                  label: "Layer 2-1-1-1"
                }
              }
            ]
          },
          {
            id: "layer-2-1-2",
            parentId: "layer-2-1",
            meta: {
              collapsed: true,
              label: "Layer 2-1-2"
            }
          },
          {
            id: "layer-2-1-3",
            parentId: "layer-2-1",
            meta: {
              collapsed: true,
              label: "Layer 2-1-3"
            }
          }
        ]
      },
      {
        id: "layer-2-2",
        parentId: "layer-2",
        meta: {
          collapsed: true,
          label: "Layer 2-2"
        },
        children: [
          {
            id: "layer-2-2-1",
            parentId: "layer-2-2",
            meta: {
              collapsed: true,
              label: "Layer 2-2-1"
            },
            children: [
              {
                id: "layer-2-2-1-1",
                parentId: "layer-2-2-1",
                meta: {
                  collapsed: true,
                  label: "Layer 2-2-1-1"
                }
              },
              {
                id: "layer-2-2-1-2",
                parentId: "layer-2-2-1",
                meta: {
                  collapsed: true,
                  label: "Layer 2-2-1-2"
                }
              },
              {
                id: "layer-2-2-1-3",
                parentId: "layer-2-2-1",
                meta: {
                  collapsed: true,
                  label: "Layer 2-2-1-3"
                }
              }
            ]
          },
          {
            id: "layer-2-2-2",
            parentId: "layer-2-2",
            meta: {
              collapsed: true,
              label: "Layer 2-2-2"
            },
            children: [
              {
                id: "layer-2-2-2-1",
                parentId: "layer-2-2-2",
                meta: {
                  collapsed: true,
                  label: "Layer 2-2-2-1"
                }
              },
              {
                id: "layer-2-2-2-2",
                parentId: "layer-2-2-2",
                meta: {
                  collapsed: true,
                  label: "Layer 2-2-2-2"
                }
              },
              {
                id: "layer-2-2-2-3",
                parentId: "layer-2-2-2",
                meta: {
                  collapsed: true,
                  label: "Layer 2-2-2-3"
                }
              }
            ]
          },
          {
            id: "layer-2-2-3",
            parentId: "layer-2-2",
            meta: {
              collapsed: true,
              label: "Layer 2-2-3"
            }
          }
        ]
      },
      {
        id: "layer-2-3",
        parentId: "layer-2",
        meta: {
          collapsed: true,
          label: "Layer 2-3"
        },
        children: []
      }
    ]
  },
  {
    id: "layer-4",
    meta: {
      collapsed: true,
      label: "Layer 4"
    },
    parentId: null,
    children: [
      {
        id: "layer-4-1",
        parentId: "layer-4",
        meta: {
          collapsed: true,
          label: "Layer 4-1"
        },
        children: []
      }
    ]
  }
];

const createTreeMockData = () => {
  let treeMockData = [];
  for (let i = 0; i < 1050; i++) {
    treeMockData = treeMockData.concat([
      {
        id: `fake-id-${i}`,

        meta: {
          collapsed: true,
          label: `My Layer ${i}`
        },
        collapsed: true,
        children: [
          {
            id: `fake-id-child1-${i}`,
            parentId: `fake-id-${i}`,
            meta: {
              collapsed: true,
              label: `My Child Layer 1-${i}`
            }
          },
          {
            id: `fake-id-child2-${i}`,
            parentId: `fake-id-${i}`,
            meta: {
              collapsed: true,
              label: `My Child Layer 2-${i}`
            },
            children: [
              {
                id: `fake-id-child2-1-${i}`,
                parentId: `fake-id-${i}`,
                meta: {
                  collapsed: true,
                  label: `My Child Layer 2-1-${i}`
                },
                children: [
                  {
                    id: `fake-id-child2-1-2-${i}`,
                    parentId: `fake-id-child2-1-${i}`,
                    meta: {
                      collapsed: true,
                      label: `My Child Layer 2-1-2-${i}`
                    },
                    children: [
                      {
                        id: `fake-id-child2-1-2-1-${i}`,
                        parentId: `fake-id-child2-1-2-${i}`,
                        meta: {
                          collapsed: true,
                          label: `My Child Layer 2-1-${i}`
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: `fake-id-child3-${i}`,
            parentId: `fake-id-${i}`,
            meta: {
              collapsed: true,
              label: `My Child Layer 3-${i}`
            }
          },
          {
            id: `fake-id-child4-${i}`,
            parentId: `fake-id-${i}`,
            meta: {
              collapsed: true,
              label: `My Child Layer 4-${i}`
            }
          },
          {
            id: `fake-id-child5-${i}`,
            parentId: `fake-id-${i}`,
            meta: {
              collapsed: true,
              label: `My Child Layer 5-${i}`
            },
            children: [
              {
                id: `fake-id-child5-1-${i}`,
                parentId: `fake-id-child5-${i}`,
                meta: {
                  collapsed: true,
                  label: `My Child Layer 5-1-${i}`
                },
                children: [
                  {
                    id: `fake-id-child5-1-1-${i}`,
                    parentId: `fake-id-child5-1-${i}`,
                    meta: {
                      collapsed: true,
                      label: `My Child Layer 5-1-${i}`
                    }
                  },
                  {
                    id: `fake-id-child5-1-2-${i}`,
                    parentId: `fake-id-child5-1-${i}`,
                    meta: {
                      collapsed: true,
                      label: `My Child Layer 5-2-${i}`
                    },
                    children: [
                      {
                        id: `fake-id-child5-1-2-1-${i}`,
                        parentId: `fake-id-child5-1-2-${i}`,
                        meta: {
                          collapsed: true,
                          label: `My Child Layer 5-2-1-${i}`
                        }
                      }
                    ]
                  },
                  {
                    id: `fake-id-child5-1-3-${i}`,
                    parentId: `fake-id-child5-1-${i}`,
                    meta: {
                      collapsed: true,
                      label: `My Child Layer 5-3-${i}`
                    }
                  },
                  {
                    id: `fake-id-child5-1-4-${i}`,
                    parentId: `fake-id-child5-1-${i}`,
                    meta: {
                      collapsed: true,
                      label: `My Child Layer 5-4-${i}`
                    }
                  },
                  {
                    id: `fake-id-child5-1-5-${i}`,
                    parentId: `fake-id-${i}`,
                    meta: {
                      collapsed: true,
                      label: `My Child Layer 5-5-${i}`
                    },
                    children: [
                      {
                        id: `fake-id-child5-1-5-1-${i}`,
                        parentId: `fake-id-child5-1-5-${i}`,
                        meta: {
                          collapsed: true,
                          label: `My Child Layer 5-1-${i}`
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]);
  }

  treeNodeSample[2].children.push(...treeMockData);

  return treeNodeSample;
};

export default createTreeMockData();
