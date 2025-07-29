document.addEventListener('contextmenu',function(e){e.preventDefault()});document.addEventListener('keydown',function(e){if(e.code==='F12'){e.preventDefault();alert("Developer tools are disabled on this page.")}
if((e.ctrlKey||e.metaKey)&&e.shiftKey&&e.code==='KeyI'){e.preventDefault();alert("Developer tools are disabled on this page.")}
if((e.ctrlKey||e.metaKey)&&e.shiftKey&&e.code==='KeyJ'){e.preventDefault();alert("Developer tools are disabled on this page.")}
if((e.ctrlKey||e.metaKey)&&e.code==='KeyU'){e.preventDefault();alert("Viewing page source is disabled.")}
if((e.ctrlKey||e.metaKey)&&e.shiftKey&&e.code==='KeyC'){e.preventDefault();alert("Developer tools (Inspect Element) are disabled on this page.")}
if((e.metaKey||e.altKey)&&e.code==='KeyJ'){e.preventDefault();alert("Developer tools are disabled on this page.")}})