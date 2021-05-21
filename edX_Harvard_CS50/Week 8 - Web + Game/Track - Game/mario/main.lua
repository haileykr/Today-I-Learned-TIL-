WINDOW_WIDTH = 1000
WINDOW_HEIGHT = 600

VIRTUAL_WIDTH = 432
VIRTUAL_HEIGHT = 243

push = require 'push'
Class = require 'class'

require 'Util'

require 'Map'

require 'Player'

require 'Animation'

math.randomseed(os.time())
map = Map()  --OOP-


function love.load()

    

    

    love.graphics.setDefaultFilter('nearest', 'nearest')

    push:setupScreen(VIRTUAL_WIDTH, VIRTUAL_HEIGHT, WINDOW_WIDTH, WINDOW_HEIGHT, {
        fullscreen = false,
        resizable = false,
        vsync = true
    })

    love.keyboard.keysPressed = {}--table to store all the keys pressed during this specific frame!
end



function love.keypressed(key)
    if key == 'escape' then
        love.event.quit()
    end

    
    
    love.keyboard.keysPressed[key] = true
end

function love.keyboard.wasPressed(key)
    return love.keyboard.keysPressed[key]
    --True of False depending on whether that key was pressed
end

function love.update(dt)
    map:update(dt)
    --apply all the current updates

    love.keyboard.keysPressed = {}
    --after each update, the table is initialized
    
end

function love.draw()
    push:apply('start')
    love.graphics.translate(math.floor(-map.camX + 0.5), math.floor(-map.camY + 0.5))
    love.graphics.clear(108/255, 140/255, 255/255, 255/255)
    map:render()
    push:apply('end')
end
