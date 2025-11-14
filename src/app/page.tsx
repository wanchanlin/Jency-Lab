import Link from "next/link";
import { ArrowRight, Sparkles, Leaf, Heart, Gift, Flower, Package, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Page() {
  const featuredProducts = [
    {
      id: 1,
      name: "Lavender Dreams",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=600&q=80",
      description: "Calming lavender with shea butter"
    },
    {
      id: 2,
      name: "Citrus Burst",
      price: "$11.99",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80",
      description: "Energizing orange and lemon blend"
    },
    {
      id: 3,
      name: "Rose Garden",
      price: "$13.99",
      image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=600&q=80",
      description: "Luxurious rose petals and oils"
    },
    {
      id: 4,
      name: "Mint Refresh",
      price: "$11.99",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80",
      description: "Cool peppermint and eucalyptus"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.avif')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="relative z-10 container text-center space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight">
            Handcrafted with Love
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Natural, organic soaps made with care for your skin and the planet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild className="text-lg">
              <Link href="/products">
                See Collection <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg">
              <Link href="/story">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-24 bg-muted/30 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl text-white md:text-4xl font-sans font-bold">
              Crafted by Hand, Inspired by Nature
            </h2>
            <p className="text-lg text-white text-muted-foreground leading-relaxed">
              Every bar of soap we create is a labor of love. Using only the finest natural ingredients, 
              we craft each batch by hand in small quantities to ensure the highest quality. Our commitment 
              to sustainability and your skin's health drives everything we do.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-white bg-primary/10 flex items-center justify-center mx-auto">
                  <Sprout className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-white">100% Natural</h3>
                <p className="text-sm text-white text-muted-foreground">
                  Only pure, organic ingredients from trusted sources
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto">
                  <Heart className="h-6  w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-white">Handmade</h3>
                <p className=" text-white text-sm text-muted-foreground">
                  Crafted in small batches with attention to detail
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12  rounded-full bg-white flex items-center justify-center mx-auto">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-white">Skin Loving</h3>
                <p className="text-sm text-white text-muted-foreground">
                  Gentle formulas that nourish and protect
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12  rounded-full bg-white flex items-center justify-center mx-auto">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-white">Vegan Options
                </h3>
                <p className="text-sm text-white text-muted-foreground">
                Plant-based recipes that are gentle on your skin and the planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-sans font-bold">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer a wide range of services to help you take care of your skin and body.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Flower className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Customized Skincare</h3>
                <p className="text-sm text-muted-foreground">
                  We offer customized skincare services to help you take care of your skin and body.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Seasonal Skincare Packages</h3>
                <p className="text-sm text-muted-foreground">
                  We offer seasonal skincare packages to help you take care of your skin and body.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Customized Gift Packages</h3>
                <p className="text-sm text-muted-foreground">
                  We offer customized gift packages to help you take care of your skin and body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold">
              Featured Collection
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our most loved handcrafted soaps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

   {/* CTA Section */}
   <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden ">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/soap.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background" />
        </div>
        <div className=" z-10 container mx-auto px-4 py-16 grid  sm:grid-cols-1 md:grid-cols-2 gap-8 pt-8 mw-auto ">
        {/* <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2  gap-8 pt-8 mw-auto"> */}
        

          {/* --- COLUMN 1: Visual Placeholder --- */}
          <div className="hidden md:flex items-center justify-center pt-8 md:pt-0">
              {/* Replace this div with a high-quality image of soap or skincare products */}
              {/* <div className="w-full max-w-sm h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 border border-dashed border-gray-400">
                  [Image Placeholder: Natural Soap Bar]
              </div> */}
          </div>
            {/* === COLUMN 2: Text & Call to Action === */}
            <div className="flex flex-col justify-center space-y-6 text-center md:text-left md:mw-auto">
              <h2 className="text-3xl md:text-4xl font-sans font-bold">
                  Experience Natural Skincare
              </h2>
              
              <p className="text-lg max-w-2xl mx-auto md:mx-0 opacity-90">
                  Join thousands of happy customers who have discovered the difference 
                  handmade, natural soaps can make for their skin.
              </p>
              
              <div className="mt-4 md:mt-0">
                  {/* Assuming Button and Link components are available */}
                  {/* <Button size="lg" variant="secondary" asChild>
                      <Link href="/products">Start Shopping</Link>
                  </Button> */}
                  
                  {/* Placeholder for the button component */}
                  <a 
                      href="/products" 
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium h-12 px-6 bg-green-600 text-white hover:bg-green-700 transition-colors shadow-lg"
                  >
                      Start Shopping
                  </a>
              </div>
          
        </div>
    </div>
      
      </section>


      <Footer />
    </div>
  );
}