class MageFactory implements CharacterFactory{

    @Override
    public Character createFactory(){
        return new Mage();
    }
}