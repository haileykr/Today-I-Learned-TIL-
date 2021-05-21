WINDOW_WIDTH = 1280
WINDOW_HEIGHT = 720

VIRTUAL_WIDTH = 432
VIRTUAL_HEIGHT = 243

push = require 'push' 

function love.load()
    love.graphics.setDefaultFilter('nearest', 'nearest')
    push:setupScreen(VIRTUAL_WIDTH, VIRTUAL_HEIGHT, WINDOW_WIDTH, WINDOW_HEIGHT, {
        fullscreen = false,
        vsync = true,
        resizable = false
    })

function love.keypressed(key)
    if key == 'escape' then
        love.event.quit()
    end
end

function love.draw()
    push:apply('start') --we're gonna be doing things in "push" end // kind of switch on

    love.graphics. printf(
        "Hello Pong!",
        0,
        VIRTUAL_HEIGHT / 2 - 6,
        VIRTUAL_WIDTH,
        'center')
    
    push:apply('end') -- switch off
end
