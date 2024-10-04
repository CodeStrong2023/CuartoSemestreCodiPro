import pygame

pygame.init()
# Configuracion de pantalla
screen = pygame.display.set_mode((500, 600))
clock = pygame.time.Clock()
running = True
ct = 0

# Posicion del jugador
player_pos = pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2)

# Velocidad del jugador
player_speed = 5

#  Bucle principal

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Detectar las teclas para presionar
    keys = pygame.key.get_pressed()

    # Movimiento del jugador
    if keys[pygame.K_a]:     # Se presiona la tecla izquierda
        player_pos.x -= player_speed
    if keys[pygame.K_s]:    # Se presiona la tecla derecha
        player_pos.y += player_speed
    if keys[pygame.K_w]:     #Se presiona la tecla hacia arriba
        player_pos.y -= player_speed
    if keys[pygame.K_d]:       # Se presiona la tecla hacia abajo
        player_pos.x += player_speed

    #  Limpiar la pantalla
    screen.fill(" green")

    #Dibujar el jugador (en este caso es un circulo rojo)
    pygame.draw.circle(screen, (255, 0, 0), (int(player_pos.x), int(player_pos.y)), 10)

    # Actualizar pantalla
    pygame.display.flip()

    # Control de velocidad del jugador estos son los frames por segundo
    clock.tick(60)

pygame.quit() # Aqui termina nuestro programa