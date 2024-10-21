import pygame

# Configuración de pantalla

pygame.init()

screen = pygame.display.set_mode((800, 600))
clock = pygame.time.Clock()
running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

screen.fill("purple")

pygame.display.flip()

clock.tick(60)

pygame.quit()
