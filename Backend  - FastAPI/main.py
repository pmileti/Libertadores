from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
 "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"mensaje": "Estas en la raiz, debes acceder por /libertadores/2023"}


@app.get("/libertadores/{item_id}")
def read_item(item_id: int):
	if (item_id==2022):
		return {"mensaje": "No tengo los equipos del 2022"}
	if (item_id==2023):
		return {
    "GRUPO A_equipo1":"Flamengo",
    "GRUPO A_equipo2":"Racing",
    "GRUPO A_equipo3":"Aucas",
    "GRUPO A_equipo4":"Ñublense",
    
    "GRUPO B_equipo1":"Nacional",
    "GRUPO B_equipo2":"Internacional",
    "GRUPO B_equipo3":"Metropolitanos",
    "GRUPO B_equipo4":"Ind. Medellín",
    
    "GRUPO C_equipo1":"Palmeiras",
    "GRUPO C_equipo2":"Barcelona",
    "GRUPO C_equipo3":"Bolivar",
    "GRUPO C_equipo4":"Cerro Porteño",
    
    "GRUPO D_equipo1":"River",
    "GRUPO D_equipo2":"Fluminense",
    "GRUPO D_equipo3":"The Strongest",
    "GRUPO D_equipo4":"Sp. Cristal",
    
    "GRUPO E_equipo1":"Ind. del Valle",
    "GRUPO E_equipo2":"Corinthians",
    "GRUPO E_equipo3":"Argentinos",
    "GRUPO E_equipo4":"Liverpool",

    "GRUPO F_equipo1":"Boca",
    "GRUPO F_equipo2":"Colo Colo",
    "GRUPO F_equipo3":"Monagas",
    "GRUPO F_equipo4":"Dep. Pereira",

    "GRUPO G_equipo1":"Paranaense",
    "GRUPO G_equipo2":"Libertad",
    "GRUPO G_equipo3":"Alianza Lima",
    "GRUPO G_equipo4":"Atl. Mineiro",

    "GRUPO H_equipo1":"Olimpia",
    "GRUPO H_equipo2":"Atl. Nacional",
    "GRUPO H_equipo3":"Melgar",
    "GRUPO H_equipo4":"Patronato",

}

	if (item_id==2024):
		return {"mensaje": "No seas ansioso, falta para el 2024"}
