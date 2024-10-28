import pygame

# configuración inicial
pygame.init()

# configuración de pantalla
screen = pygame.display.set_mode((800, 600))
clock = pygame.time.Clock()
running = True
player_speed = 5

# posición del jugador
player_pos = pygame.math.Vector2(screen.get_width() // 2, screen.get_height() // 2)

# bucle principal
while running:
    # manejar eventos
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # detectar teclas presionadas
    keys = pygame.key.get_pressed()

    # movimiento del jugador
    if keys[pygame.K_LEFT]:
        player_pos.x -= player_speed
    if keys[pygame.K_RIGHT]:
        player_pos.x += player_speed
    if keys[pygame.K_UP]:
        player_pos.y -= player_speed
    if keys[pygame.K_DOWN]:
        player_pos.y += player_speed

    # limpiar pantalla (esto asegura que la pantalla verde esté actualizada)
    screen.fill('green')

    # dibujar jugador
    pygame.draw.circle(screen, (255, 0, 0), (int(player_pos.x), int(player_pos.y)), 10)

    # actualizar pantalla
    pygame.display.flip()

    # controlar la tasa de actualización
    clock.tick(60)

# salir de pygame
pygame.quit()