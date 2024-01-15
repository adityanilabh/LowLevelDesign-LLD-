class AquariumFacotory implements ZooFactory{

    @Override
    public Herbivorous createHerbivorous(){
        return new Turtle();
    }

    @Override
    public Carnivorous createCarnivorous(){
        return new Shark();
    }
}