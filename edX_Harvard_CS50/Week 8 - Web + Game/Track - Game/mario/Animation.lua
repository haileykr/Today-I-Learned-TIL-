Animation = Class{}

function Animation:init(params)
    self.texture = params.texture
    self.frames = params.frames
    self.interval = params.interval or 0.05
    self.timer = 0
    self.currentFrame = 1 --default
end

function Animation:getCurrentFrame()
    return self.frames[self.currentFrame]
end

function Animation:restart()
    --we dont wanna start at the middle of the transition
    --going back and forth the states
    self.timer = 0
    self.currentFrame = 1
end

function Animation:update(dt)
    self.timer = self.timer + dt
    -- if the timer is greater than the interval,
    -- the frame should be set to the next_value

    if #self.frames == 1 then
        --# means length. if the length of the frames is one,
        --nothing to do
        return self.currentFrame

    else
        while self.timer > self.interval do
            self.timer = self.timer - self.interval

            self.currentFrame = (self.currentFrame + 1) % (#self.frames + 1)

            if self.currentFrame == 0 then self.currentFrame = 1
            end
        end
    end
end

