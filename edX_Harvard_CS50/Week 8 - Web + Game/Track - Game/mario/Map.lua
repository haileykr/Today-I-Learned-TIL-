require 'Util'

require 'Player'

Map = Class{}

TILE_BRICK = 1
TILE_EMPTY = 4

CLOUD_LEFT = 6
CLOUD_RIGHT = 7

BUSH_LEFT = 2
BUSH_RIGHT = 3

MUSHROOM_TOP = 10
MUSHROOM_BOTTOM = 11

JUMP_BLOCK = 5

JUMP_BLOCK_HIT = 9

local SCROLL_SPEED = 62


function Map:init()
    self.spritesheet = love.graphics.newImage('graphics/spritesheet.png')
    self.tileWidth=16 --pixel size [provided]
    self.tileHeight=16
    self.mapWidth=30 --how_many_tiles_wide_our_map_actually_is ~ arbitrary
    self.mapHeight=28
    self.tiles = {}

    
    
    self.music = love.audio.newSource('sounds/music.wav','static')

    self.player = Player(self)--referencing MAP ITSELF GOING INTO THE PLAER

    self.camX = 0
    self.camY = 0

    self.sprites = generateQuads(self.spritesheet, self.tileWidth, self.tileHeight)
    
    self.mapWidthPixels = self.mapWidth * self.tileWidth
    self.mapHeightPixels = self.mapHeight * self.tileHeight

    --filling the map with empty tiles
    for y = 1, self.mapHeight do
        for x = 1, self.mapWidth do
            self:setTile(x, y, TILE_EMPTY)
        end
    end


    --begin generating the terrain using vertical scan lines
    local x = 1
    while x < self.mapWidth do

        -- 5% chance to generate a cloud
        -- make sure we're 2 tiles from edge at least

        if x < self.mapWidth - 2 then
            if math.random(20) == 1 then
        
                local cloudStart = math.random(self.mapHeight / 2 - 6)

                self:setTile(x,  cloudStart,  CLOUD_LEFT)
                self:setTile(x+1,  cloudStart,  CLOUD_RIGHT)
            end
        end
    


        --5% chance to generate a mushroom
        if math.random(20) == 1 then

            --left side of pipe
            self:setTile(x, self.mapHeight / 2 - 2, MUSHROOM_TOP)
            self:setTile(x, self.mapHeight / 2 - 1, MUSHROOM_BOTTOM)

            --creates column of tiles going to bottom of map
            for y = self.mapHeight / 2, self.mapHeight do  
                self:setTile(x, y, TILE_BRICK)
            end


            --next vertical scan line
            x = x+1


            -- 10% chance to generate bush, being sure to generate away from edge
        elseif math.random(10) == 1 and x < self.mapWidth - 3 then
            local bushLevel = self.mapHeight / 2 - 1

            -- place bush component and then column of bricks
            self:setTile(x, bushLevel, BUSH_LEFT)
            for y = self.mapHeight / 2, self.mapHeight do
                self:setTile(x, y, TILE_BRICK)
            end
            x=x+1

            self:setTile(x, bushLevel, BUSH_RIGHT)
            for y = self.mapHeight / 2, self.mapHeight do
                self:setTile(x, y, TILE_BRICK)
            end
            x = x+1

            --10% chance to not generate anything
        elseif math.random(10) ~= 1 then

            --creates column of tiles going to bottom of map
            for y = self.mapHeight / 2, self.mapHeight do
                self:setTile(x, y, TILE_BRICK)
            end

            -- chance to create a block for Mario to hit
            if math.random(15) == 1 then
                self:setTile(x, self.mapHeight / 2 - 4, JUMP_BLOCK)
            end

            x = x+1

        
        --Increment X so we skip two scanlines,  Creating a 2-tile gap
        else
            x = x+2
        end
    end

    self.music:setLooping(true)
    self.music:setVolume(0.25)
    self.music:play()

end
function Map:collides(tile)
    --definte our collidable tiles
    local collidables = {
        TILE_BRICK, JUMP_BLOCK, JUMP_BLOCK_HIT,
        MUSHROOM_TOP, MUSHROOM_BOTTOM
    }

    --Iterate and return true if our tile type matches
    for _, v in ipairs(collidables) do
        if tile.id ==v then
            return true
        end
    end

    return false
end



function Map:update(dt)

    


    self.player:update(dt)    
        self.camX = math.max(0,
            math.min(self.player.x - VIRTUAL_WIDTH /2,
                math.min(self.mapWidthPixels - VIRTUAL_WIDTH, self.player.x)))

    
end

--Gets the tile type at a given pixel coord.
function Map:tileAt(x, y)
    return {
        x = math.floor(x / self.tileWidth) + 1
        ,


        y = math.floor(y / self.tileHeight)+1
        ,
        
        id = self:getTile(math.floor(x / self.tileWidth) + 1, math.floor(y / self.tileHeight) + 1)

        }
end


function Map:getTile(x,y)
    return self.tiles[(y-1) * self.mapWidth + x]
end

function Map:setTile(x, y, id)
    self.tiles[
        (y-1) * self.mapWidth + x
    ] = id --(y-1)because the index started at 1 but the pixel index starts at zero
end


function Map:render()
    for y = 1, self.mapHeight do
        for x = 1, self.mapWidth do
            local tile = self:getTile(x,y)

            if tile ~= TILE_EMPTY  then
                love.graphics.draw(self.spritesheet, self.sprites[tile],
                    (x-1) * self.tileWidth, (y - 1) * self.tileHeight)
            end
        end
    end


    self.player:render()
end