

var SimpleRWC = function (elementToBindReaderTo, viewerPreferences, packageDocumentURL, packageDocumentXML, renderStrategy) {
    
    // Epub modules
    var EpubCFI = {};
    var EpubReflowable = {};
    var EpubFixed = {};
    var EpubParser = {};
    var Epub = {};
    var EpubReader = {};
    var EpubAnnotations = {};

    // Rationale: The order of these matters
    
    
    
    
    
    

    // -------------- Initialization of viewer ------------------ //
    var epubParser = new EpubParserModule(packageDocumentURL, packageDocumentXML);
    var packageDocumentDOM = (new window.DOMParser()).parseFromString(packageDocumentXML, "text/xml");
    var epub = new EpubModule(epubParser.parse(), packageDocumentXML);
    var epubViewer = new EpubReaderModule(
        elementToBindReaderTo,
        epub.getSpineInfo(),
        viewerPreferences,
        packageDocumentDOM,
        renderStrategy
    );

    // Description: The public interface
    return {

        // epub module api
        // -- None added so far 

        // epub viewer module api
        render : function () { return epubViewer.render.call(epubViewer); },
        showSpineItem : function (spineIndex, callback, callbackContext) { return epubViewer.showSpineItem.call(epubViewer, spineIndex, callback, callbackContext); },
        showPageByCFI : function (CFI, callback, callbackContext) { return epubViewer.showPageByCFI.call(epubViewer, CFI, callback, callbackContext); },
        showPageByElementId : function (spineIndex, hashFragmentId, callback, callbackContext) { return epubViewer.showPageByElementId.call(epubViewer, spineIndex, hashFragmentId, callback, callbackContext); },
        nextPage : function (callback, callbackContext) { return epubViewer.nextPage.call(epubViewer, callback, callbackContext); },
        previousPage : function (callback, callbackContext) { return epubViewer.previousPage.call(epubViewer, callback, callbackContext); },
        setFontSize : function (fontSize) { return epubViewer.setFontSize.call(epubViewer, fontSize); },
        setMargin : function (margin) { return epubViewer.setMargin.call(epubViewer, margin); },
        setTheme : function (theme) { return epubViewer.setTheme.call(epubViewer, theme); },
        setSyntheticLayout : function (isSynthetic) { return epubViewer.setSyntheticLayout.call(epubViewer, isSynthetic); },
        getNumberOfPages : function () { return epubViewer.getNumberOfPages.call(epubViewer); },
        getCurrentPage : function () { return epubViewer.getCurrentPage.call(epubViewer); },
        on : function (eventName, callback, callbackContext) { return epubViewer.on.call(epubViewer, eventName, callback, callbackContext); },
        off : function (eventName) { return epubViewer.off.call(epubViewer, eventName); }, 
        getViewerSettings : function () { return epubViewer.getViewerSettings.call(epubViewer); }
    };
};
