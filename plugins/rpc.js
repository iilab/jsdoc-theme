exports.defineTags = function(dictionary) {
  dictionary.defineTag('rpc', {
    onTagged: handleRpcTag
  });
  dictionary.defineTag('rpcroute', {
    onTagged: handleRpcRoute
  });
  dictionary.defineTag('rpccall', {
    onTagged: handleRpcCallTag
  });
};

function handleRpcTag(doclet, tag) {
  doclet.rpc = tag.value || true;
}

function handleRpcRoute(doclet, tag) {
  doclet.rpcroute = tag.value || true;
}

function handleRpcCallTag(doclet, tag) {
  if (!tag.value) return;
  doclet.rpccall = doclet.rpccall || [];
  doclet.rpccall.push(tag);
}
