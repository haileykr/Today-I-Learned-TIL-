WINDOW_WIDTH = 1000
WINDOW_HEIGHT = 600

VIRTUAL_WIDTH = 436
VIRTUAL_HEIGHT = 243

PADDLE_SPEED = 200      --200PIXELS/SECOND

Class = require 'class'
push = require 'push' 

require 'Ball'
require 'Paddle'

function love.load()

    math.randomseed(os.time())

    love.graphics.setDefaultFilter('nearest', 'nearest')

    love.window.setTitle('Pong')
    
    smallFont = love.graphics.newFont('font.ttf', 8)
    
    scoreFont = love.graphics.newFont('font.ttf', 32)
        

        victoryFont=love.graphics.newFont('font.ttf', 24)

    player1Score = 0
    player2Score = 0

    servingPlayer = math.random(2) == 1 and 1 or 2
    winningPlayer=0

    

    paddle1 = Paddle(5, 20, 5, 20)
    paddle2 = Paddle(VIRTUAL_WIDTH - 10, VIRTUAL_HEIGHT - 30, 5, 20)
    


    ball = Ball(VIRTUAL_WIDTH / 2 - 2, VIRTUAL_HEIGHT / 2 - 2, 5, 5)


    sounds={
        ['paddle_hit'] = love.audio.newSource('paddle_hit.wav', 'static'),
        ['point_scored']=love.audio.newSource('score.wav','static'),
        
        ['wall_hit']=love.audio.newSource('wall_hit.wav', 'static')
    }
    
    if servingPlayer == 1 then
        ball.dx=100
    else
        ball.dx=-100
    end

    gameState = 'start'
    
    push:setupScreen(VIRTUAL_WIDTH, VIRTUAL_HEIGHT, WINDOW_WIDTH, WINDOW_HEIGHT, {
        fullscreen = false,
        vsync = true,
        resizable = true
    })
end

function love.resize(w,h)
    push:resize(w,h)
end


function love.update(dt)
if gameState =='play' then

    paddle1:update(dt)
    paddle2:update(dt)  

    if ball.x <= 0 then
        player2Score = player2Score +1

        sounds['point_scored']:play()

        servingPlayer = 2
        ball:reset()
        ball.dx = -100
        

        if player2Score >=3 then
            gameState = 'victory'
            winningPlayer=2
        else
            gameState = 'serve'
        end
        
    end
    if ball.x >=VIRTUAL_WIDTH-4 then


        player1Score=player1Score+1

        sounds['point_scored']:play()

        servingPlayer = 1
        ball:reset()
        ball.dx = 100
        

        if player1Score>=3 then
            gameState = 'victory'

            winningPlayer=1
        else
            gameState ='serve'
        end
    end

    if ball:collides(paddle1) then
        -- deflect the ball to the right
        ball.dx = -ball.dx
        
        
        sounds['paddle_hit']:play()
    end

    if ball:collides(paddle2) then
        -- deflect the ball to the left

        ball.dx = -ball.dx
        sounds['paddle_hit']:play()
    end

    if ball.y <= 0 then
        -- deflec the ball down
        ball.dy = -ball.dy
        ball.y = 0

        sounds['wall_hit']:play()
    end

    if ball.y >=VIRTUAL_HEIGHT - 4 then
        ball.dy = - ball.dy
        ball.y = VIRTUAL_HEIGHT - 4
    
    
        sounds['wall_hit']:play()
    end




   if love.keyboard.isDown('w') then
        paddle1.dy = - PADDLE_SPEED
    
   elseif love.keyboard.isDown('s') then
        paddle1.dy = PADDLE_SPEED
   else
        paddle1.dy = 0
    end

   if love.keyboard.isDown('up') then
        paddle2.dy = -PADDLE_SPEED
    
   elseif love.keyboard.isDown('down') then
        paddle2.dy = PADDLE_SPEED
   else
        paddle2.dy = 0
    end
    
        ball:update(dt)
end
end

function love.keypressed(key)
    if key == 'escape' then
        love.event.quit()
    
    elseif key == 'enter' or key == 'return' then
        if gameState == 'start' then
            gameState = 'serve'
        elseif gameState == 'victory' then
            gameState = 'start'
            player1Score=0
            player2Score=0
        elseif gameState =='serve'then
            gameState = 'play'
            ball:reset()

            
        end
    end
end

function love.draw()
    push:apply('start') --we're gonna be doing things in "push" end // kind of switch on


    love.graphics.clear(40 / 255, 45 / 255, 52 / 255, 255 / 255)
    ball:render()


    
    
    
    
    paddle1:render()
    paddle2:render()
    
    love.graphics.setFont(smallFont)

    if gameState == 'start' then
        love.graphics.printf("Welcome to Pong", 0, 20, VIRTUAL_WIDTH, 'center')
        love.graphics.printf("Press Enter to Play!", 0, 32, VIRTUAL_WIDTH, 'center')
    elseif gameState == 'serve' then
        love.graphics.printf("Player " .. tostring(servingPlayer) .. "'s turn!", 0, 20, VIRTUAL_WIDTH, 'center')
        love.graphics.printf("Press Enter to Serve!", 0, 32, VIRTUAL_WIDTH, 'center')
    elseif gameState=='victory' then
        --draw a victory message
        love.graphics.setFont(victoryFont)
        love.graphics.printf("Player ".. tostring(winningPlayer).. "wins!" , 0, 10, VIRTUAL_WIDTH, 'center')
        love.graphics.printf("Press Enter to serve!", 0, 42, VIRTUAL_WIDTH, 'center')
        
        love.graphics.setFont(smallFont)
    end
    displayFPS()
    love.graphics.setFont(scoreFont)

    




    love.graphics.print(player1Score, VIRTUAL_WIDTH / 2 - 50, VIRTUAL_HEIGHT / 3)
    love.graphics.print(player2Score, VIRTUAL_WIDTH / 2 + 30, VIRTUAL_HEIGHT / 3)

    push:apply('end') -- switch off
end




function displayFPS()
    love.graphics.setColor(0,1,0,1)
    love.graphics.setFont(smallFont)
    love.graphics.print('FPS:'.. tostring(love.timer.getFPS()), 40, 20)
    love.graphics.setColor(1,1,1,1)


end