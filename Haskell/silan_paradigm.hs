step :: [[Int]] -> [[Int]]
step grid =
  [[newCell i j | j <- [0..cols-1]] | i <- [0..rows-1]]
  where
    rows = length grid
    cols = length (head grid)

    get i j =
      if i < 0 || i >= rows || j < 0 || j >= cols
      then 0
      else grid !! i !! j

    ones =
      [(i,j) | i <- [0..rows-1], j <- [0..cols-1], get i j == 1]

    infected =
      concat
        [ [(i,j), (i,j+1), (i,j-1), (i+1,j), (i-1,j)]
        | (i,j) <- ones
        ]

    newCell i j =
      if (i,j) `elem` infected then 1 else 0




applyN :: Int -> (a -> a) -> a -> a
applyN n f x 
    | n == 0 = x
    | otherwise = applyN(n - 1) f (f x) 


sqrtStep :: Double -> Double -> Double
sqrtStep a x = (x + a / x) / 2

sqrtNewton :: Int -> Double -> Double
sqrtNewton n a = applyN n (sqrtStep a) 1