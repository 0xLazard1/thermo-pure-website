'use client'
import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulation d'envoi email
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log("Email envoyé à contact@thermopure.fr:", formData)
        setSubmitted(true)
        setIsSubmitting(false)
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }

    if (submitted) {
        return (
            <section id="contact" className="py-12 md:py-16 lg:py-20 bg-white relative">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-center min-h-[50vh]">
                <Card className="max-w-md mx-auto text-center">
                    <CardContent className="pt-6">
                        <div className="text-6xl mb-4">✅</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Message envoyé !</h3>
                        <p className="text-gray-600 mb-4">
                            Nous avons bien reçu votre message et vous recontacterons dans les plus brefs délais.
                        </p>
                        <Button onClick={() => setSubmitted(false)}>
                            Envoyer un autre message
                        </Button>
                    </CardContent>
                </Card>
            </div>
            </section>
        )
    }

    return (
        <section id="contact" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white relative">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-6">
                        Contactez-nous
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Une question ? Un projet ? N&apos;hésitez pas à nous contacter pour un devis gratuit ou des conseils personnalisés.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Informations de contact */}
                    <div className="space-y-6">
                        <Card className="border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Mail className="text-emerald-600" size={24} />
                                    Email
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">contact@thermopure.fr</p>
                                <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Phone className="text-emerald-600" size={24} />
                                    Téléphone
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">01 23 45 67 89</p>
                                <p className="text-sm text-gray-500 mt-1">Lun-Ven 8h-18h</p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="text-emerald-600" size={24} />
                                    Adresse
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Zone d&apos;intervention</p>
                                <p className="text-gray-600">Niort et Deux-Sèvres (79)</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Départements voisins : 17, 85, 86
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Formulaire de contact */}
                    <Card className="border-2 border-emerald-100 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-emerald-700">Envoyez-nous un message</CardTitle>
                            <CardDescription>
                                Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="name">Nom complet *</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Votre nom"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="phone">Téléphone</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Votre téléphone"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="email">Email *</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="votre@email.com"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="subject">Sujet *</Label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Sujet de votre demande"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="message">Message *</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Décrivez votre projet ou votre demande..."
                                        rows={5}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}