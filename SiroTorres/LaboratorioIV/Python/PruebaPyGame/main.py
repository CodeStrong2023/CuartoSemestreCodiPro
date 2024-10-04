# Ejemplo de pantalla en pygame
import pygame

# configuracion de pygame
pygame.init()
screen = pygame.display.set_mode((800, 600))
clock = pygame.time.Clock()
running = True

player_pos = pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2)

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

screen.fill( 'purple')

pygame.display.flip()

clock.tick(60)

pygame.quit()