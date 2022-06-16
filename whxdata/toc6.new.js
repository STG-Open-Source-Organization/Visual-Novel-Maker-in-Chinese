(function () {
    var toc = [
        { "type": "item", "name": "基础", "url": "Basic.htm" },
        { "type": "item", "name": "List", "url": "List.htm" },
        { "type": "item", "name": "Audio Playback", "url": "Audio_Playback.htm" },
        { "type": "item", "name": "背景", "url": "Background.htm" },
        { "type": "item", "name": "Movie", "url": "Movie.htm" },
        { "type": "item", "name": "Scenes", "url": "SceneCommand.htm" },
        { "type": "item", "name": "Character", "url": "Character.htm" },
        { "type": "item", "name": "Live2D", "url": "Live2D.htm" },
        { "type": "item", "name": "Message", "url": "Message.htm" },
        { "type": "item", "name": "Picture", "url": "Picture.htm" },
        { "type": "item", "name": "Text", "url": "Text.htm" },
        { "type": "item", "name": "Screen", "url": "Screen.htm" },
        { "type": "item", "name": "System Command", "url": "System_Command.htm" }];
    window.rh.model.publish(rh.consts('KEY_TEMP_DATA'), toc, { sync: true });
})();