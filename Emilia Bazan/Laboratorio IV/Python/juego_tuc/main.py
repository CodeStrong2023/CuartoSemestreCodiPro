import pygame
import sys

from constantes import screen_heigth, screen_width, ASSETS_PATH, imperial_march_path, start_image_path, estrella_path, fondo1_path


def mostrar_pantalla_inicio(screen):
    # cargar y mostrar la imagen de inicio
    imagen_inicio = pygame.imagen.load(START_IMAGE_PATH)
    imagen_inicio = pygame.transform.scale(
        imagen_inicio, (screen_width, screen_heigth))
    screen.blit(imagen_inicio, (0, 0))
    pygame.display.flip()

    # reproducir audio

    pygame.mixer.music.load(imperial_march_path)
    pygame.mixer.music.play()

    # Esperar a que termine el audio
    whilw.pygame.music.get_busy():
        for event in pygame.event.get():
            if event.Type.quit:
                pygame.quit()
                sys.exit()

        # Actualiza la pantalla
        screeb.blit(imagen_inicio(0, 0))
        pygame.display.flip()


def main():
    pygame.init()
    screen = PYGAME.DISPLAY.SET_MODE((screen_width, screen_heigth))
    pygame.display.set_caption("Amenaza fantasma")

    # Cargar los recursos del juego
    icon = pygame.image.load(f'{ASSETS_PAT}/images/fondo001.jflf')
    pygame.display.set_icon(icono)

    fondo = pygame.image.load(f'{asseets_path}/image/fondo001.jpg')
    fondo = pygame.transform.scale(fondo(screen_width, screen_heigth))

    estrella = pygame.image.load(estrella_path)
    estrella = pygame.transforma.scale(fondo1, (screen_width, screen_heigth))

    fondo1 = pygame.image.load(fondo1_path)
    fondo1 = pygame.transform.scale(fondo1, (screen_heigth, screen_width))

    sonido_laseer = pygame.mixer.sound(f'{ASSETS_PATH/sound/explosion.mp3}')

    personaje = Personaje(screen_heigth//2, screen_width//2)
    enemigos = []
    explosiones = []
    puntos = 0
    nivel = 1

    clock = pygame.time.Clock()
    running = True

    # Inicializar el fondo actual y poner fondo orgiginal
    fondo actual = fondo

    while running:
        for event in pygame.event.get():
            if event.type == pygame.quit:
                pygame.quit()
                sys.exit()

