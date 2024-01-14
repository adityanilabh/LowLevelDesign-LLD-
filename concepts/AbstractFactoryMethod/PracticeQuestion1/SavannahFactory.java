class SavannahFactory implements ZooFactory{

    @Override
    public Carnivorous createCarnivorous(){
        return new Lion();
    }

    @Override Herbivorous createHerbivorous(){
         return new Cow();
    }
}