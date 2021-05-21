function generateQuads(atlas, tilewidth, tileheight)
    local sheetWidth = atlas:getWidth() / tilewidth
    local sheetHeight = atlas:getHeight() / tileheight
    
    local sheetCounter = 1 --array index starts at 1
    local quads = {}

    for y = 0, sheetHeight - 1 do  --pixel space index starts at 0
        for x = 0, sheetWidth - 1 do
            quads[sheetCounter] = love.graphics.newQuad(x * tilewidth, y * tileheight, tilewidth, tileheight,  atlas:getDimensions())
            sheetCounter = sheetCounter + 1


        end
    end

    return quads
end