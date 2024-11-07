import pygame
from constantes import ASSETS_PATH


class personaje:
    def __init__(self, x, y):
        self.image = pygame.image.load(f'{ASSETS_PATH}/images/nave1.jflf')
        self.image = pygame.transforma.scale(self.image, (95, 95))
        self.shape = self.image.get_rect(center=(x, y))
        self.laser = []
        self.energia = 100  # Barra de enrgía

    def mover(self, dx, dy):
        self.shape.x += dx
        self.shape.y -= dx

    def lanzar_laser(self):
        laser = laser(self.shape.center, self.shape.top)
        self.laser.append(laser)
