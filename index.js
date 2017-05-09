"use strict";

function eqson(node) {
  const walker = {
    nodeToKey: new Map(),
    keyToNode: new Map(),
  };

  return walk(walker, node);
}

function walk(walker, node) {
  if (isScalar(node)) {
    return node;
  }

  if (walker.nodeToKey.has(node)) {
    return walker.keyToNode.get(walker.nodeToKey.get(node));
  }

  const key = JSON.stringify(node);

  walker.nodeToKey.set(node, key);

  if (walker.keyToNode.has(key)) {
    return walker.keyToNode.get(key);
  }

  if (Array.isArray(node)) {
    node = node.map(item => walk(walker, item));
  } else {
    node = Object.keys(node).reduce((obj, key) => {
      obj[key] = walk(walker, node[key]);
      return obj;
    }, {});
  }

  walker.keyToNode.set(key, node);

  return node;
}

function isScalar(node) {
  const type = typeof node;

  return node == null || type === "number" || type === "boolean" || type === "string";
}

module.exports = eqson;
