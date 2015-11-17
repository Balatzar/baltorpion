
3.times do |x|
  3.times do |y|
    [-1, 0, +1].each do |lambda_x| 
      [-1, 0, +1].each do |lambda_y|
        sum = @grid[x, y]
        2.times do 
          x += lambda_x
          y += lambda_y 
          sum += @grid[x, y]
       end
       return true if sum.abs == 3
    end
   end 
 end
end