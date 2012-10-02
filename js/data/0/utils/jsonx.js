function functionReplacer(key, value) {
    if (typeof(value) === 'function') {
        return value.toString();
    }
    return value;
}

function functionReviver(key, value) {
    if (key === "") return value;
    
    if (typeof value === 'string') {
        var rfunc = /function[^\(]*\(([^\)]*)\)[^\{]*{(.*)\}\s*/,
            match = value.match(rfunc);
        
        if (match) {
            var args = match[1].split(',').map(function(arg) { return arg.replace(/\s+/, ''); });
            return new Function(args, match[2]);
        }
    }
    return value;
}

JSONx = {
    parse : function(string) {
        return JSON.parse(string, functionReviver);
    },
    stringify : function(object, indent) {
        return JSON.stringify(object, functionReplacer, indent);
    }
}