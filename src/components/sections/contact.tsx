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

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Erreur lors de l\'envoi')
            }

            setSubmitted(true)
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" })

            // Conversion tracking Google Ads
            const w = window as unknown as { gtag?: (...args: unknown[]) => void }
            if (typeof w.gtag === 'function') {
                w.gtag('event', 'generate_lead', {
                    event_category: 'contact',
                    event_label: 'formulaire_devis',
                })
            }
        } catch (error) {
            console.error('Erreur:', error)
            alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ou nous contacter directement par téléphone.')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (submitted) {
        return (
            <section id="contact" className="py-12 md:py-16 lg:py-20 bg-white relative">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-center min-h-[50vh]">
                <Card className="max-w-full sm:max-w-md mx-auto text-center">
                    <CardContent className="pt-8 pb-8">
                        <div className="text-5xl sm:text-6xl md:text-7xl mb-6">🎉</div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-3">Merci pour votre message !</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Nous avons bien reçu votre demande et nous vous recontacterons dans les plus brefs délais.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="bg-emerald-600 hover:bg-emerald-700"
                            >
                                Retour en haut de page
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => setSubmitted(false)}
                                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                            >
                                Envoyer un autre message
                            </Button>
                        </div>
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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
                                <p className="text-gray-600">contact@thermo-pure.com</p>
                                <p className="text-sm text-gray-500 mt-1">Réponse sous 2 heures</p>
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
                                <p className="text-gray-600">06 71 55 80 27</p>
                                <p className="text-sm text-gray-500 mt-1">7j/7 8h-20h</p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="text-emerald-600" size={24} />
                                    Zone d&apos;intervention
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                          
                                <p className="text-gray-600">Nouvelle-Aquitaine</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Départements voisins :  79, 17, 85, 86
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
                            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                                    className="w-full py-2 sm:py-3"
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