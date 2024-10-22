import pygame

# Configuración inicial
pygame.init()

# Configuración de pantalla
screen = pygame.display.set_mode((800, 600))
clock = pygame.time.Clock()
running = True
player_speed = 5

# Posición del jugador
player_pos = pygame.math.Vector2(screen.get_width() // 2, screen.get_height() // 2)

# Bucle principal
while running:
    # Manejar eventos
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Detectar teclas presionadas
    keys = pygame.key.get_pressed()

    # Movimiento del jugador
    if keys[pygame.K_LEFT]:
        player_pos.x -= player_speed
    if keys[pygame.K_RIGHT]:
        player_pos.x += player_speed
    if keys[pygame.K_UP]:
        player_pos.y -= player_speed
    if keys[pygame.K_DOWN]:
        player_pos.y += player_speed

    # Limpiar pantalla (esto asegura que la pantalla verde esté actualizada)
    screen.fill('green')

    # Dibujar jugador
    pygame.draw.circle(screen, (255, 0, 0), (int(player_pos.x), int(player_pos.y)), 10)

    # Actualizar pantalla
    pygame.display.flip()

    # Controlar la tasa de actualización
    clock.tick(60)

# Salir de pygame
pygame.quit()
