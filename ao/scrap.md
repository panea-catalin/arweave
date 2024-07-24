#Register for the game
Send({Target = Game, Action = "Register"})
#Send entry payment
Send({Target = Game, Action = Transfer, Quantity = 1000})
#Get the status of the game
Send({Target = Game, Action = "GetGameState"})







#Move
Send({ Target = Game, Action = "PlayerMove", Player = ao.id, Direction = "x"})

Up - Down - Left - Right - UpRight - UpLeft - DownRight - DownLeft
#Strike
Send({ Target = Game, Action = "PlayerAttack", Player = ao.id, AttackEnergy = "energy_integer"})