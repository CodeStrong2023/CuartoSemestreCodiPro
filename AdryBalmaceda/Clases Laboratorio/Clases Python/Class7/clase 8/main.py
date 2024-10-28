import pygame # type: ignore
import sys

from constantes import SCREEN_WIDTH, SCREEN_HEIGHT , START_IMAGE_PATH, IMPERIAL_MARCH_PATH, ASSETS_PATH, ESTRELLA_PATH, FONDO1_PATH

def mostrar_pantalla_inicio(screen):
    imagen_inicio = pygame.image.load(START_IMAGE_PATH)
    imagen_inicio = pygame.transform.scale(imagen_inicio, (SCREEN_WIDTH, SCREEN_HEIGHT))
    screen.blit(imagen_inicio, (0, 0))
    pygame.display.flip()
    
    # reproducir audio
    pygame.mixer.music.load(IMPERIAL_MARCH_PATH)
    pygame.mixer.music.play()
    
    while pygame.mixer.music.get_busy():
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
        # actualizar pantalla
        screen.blit(imagen_inicio, (0, 0))
        pygame.display.flip()
        
        
        
def main():
    pygame.init()
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    pygame.display.set_caption('Star Wars')
    #cargar recursos
    
    icon = pygame.image.load(f'{ASSETS_PATH}/images/fondo001.jfif')
    pygame.display.set_icon(icon)
    
    fondo = pygame.image.load(f'{ASSETS_PATH}/images/fondo003.jpg')
    fondo = pygame.transform.scale(fondo, (SCREEN_WIDTH, SCREEN_HEIGHT))
    
    estrella = pygame.image.load(ESTRELLA_PATH)
    estrella = pygame.transform.scale(fondo1, (SCREEN_WIDTH, SCREEN_HEIGHT))
    
    fondo1 = pygame.image.load(FONDO1_PATH)
    fondo1 = pygame.transform.scale(fondo, (SCREEN_WIDTH, SCREEN_HEIGHT))
    
    sonido_laser = pygame.mixer.Sound(f'{ASSETS_PATH}/sounds/laser.wav')
    
    personaje = personaje(SCREEN_HEIGHT//2, SCREEN_WIDTH//2)
    enemigos = []
    explosiones = []
    puntos = 0
    nivel = 1
    
    clock = pygame.time.Clock()
    running = True
    
    #Inicializar el fondo actual con el original
    fondo_Actual = fondo
    
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()           