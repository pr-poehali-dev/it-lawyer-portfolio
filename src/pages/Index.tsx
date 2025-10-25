import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const specializations = [
    {
      icon: 'Code2',
      title: 'IT-контракты',
      description: 'Разработка и проверка договоров на разработку ПО, SaaS, лицензионных соглашений'
    },
    {
      icon: 'Shield',
      title: 'Защита данных',
      description: 'Консультации по GDPR, 152-ФЗ, политики конфиденциальности и обработки данных'
    },
    {
      icon: 'Scale',
      title: 'Интеллектуальная собственность',
      description: 'Регистрация и защита авторских прав, патентов, товарных знаков в IT-сфере'
    },
    {
      icon: 'FileCode',
      title: 'Open Source',
      description: 'Консультации по лицензиям MIT, GPL, Apache, коммерциализация open source проектов'
    },
    {
      icon: 'Globe',
      title: 'Международное право',
      description: 'Поддержка международных IT-проектов, кросс-border транзакции, налогообложение'
    },
    {
      icon: 'Briefcase',
      title: 'Корпоративное право',
      description: 'Регистрация IT-компаний, инвестиционные сделки, M&A в технологическом секторе'
    }
  ];

  const cases = [
    {
      title: 'Защита стартапа от недобросовестного инвестора',
      category: 'Инвестиции',
      result: 'Успешно оспорили кабальные условия, сохранили контроль учредителей',
      tags: ['Венчур', 'Договоры']
    },
    {
      title: 'Регистрация международного SaaS-проекта',
      category: 'Корпоративное право',
      result: 'Оптимизирована налоговая структура, создана холдинговая компания',
      tags: ['SaaS', 'Международное право']
    },
    {
      title: 'Разрешение спора по авторским правам на код',
      category: 'Интеллектуальная собственность',
      result: 'Доказали права клиента на исходный код, получили компенсацию',
      tags: ['Авторское право', 'Судебная практика']
    }
  ];

  const services = [
    { title: 'Консультация (1 час)', price: 'от 15 000 ₽' },
    { title: 'Проверка договора', price: 'от 20 000 ₽' },
    { title: 'Разработка договора', price: 'от 35 000 ₽' },
    { title: 'Политика конфиденциальности', price: 'от 25 000 ₽' },
    { title: 'Пользовательское соглашение', price: 'от 25 000 ₽' },
    { title: 'Абонентское обслуживание', price: 'от 50 000 ₽/мес' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            IT-Lawyer
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#specializations" className="hover:text-primary transition-colors">Специализации</a>
            <a href="#cases" className="hover:text-primary transition-colors">Кейсы</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Консультация
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 text-sm px-4 py-2 bg-primary/20 text-primary border-primary/30">
              IT-Юрист с опытом в tech-индустрии 8+ лет
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Юридическая защита
              <br />
              для IT-бизнеса
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Помогаю стартапам и IT-компаниям решать правовые вопросы: от регистрации до международных сделок
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                <Icon name="FileText" className="mr-2" size={20} />
                Скачать примеры
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="specializations" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Специализации</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Глубокая экспертиза в ключевых направлениях IT-права
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, idx) => (
              <Card 
                key={idx} 
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={spec.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{spec.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{spec.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Успешные кейсы</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Реальные результаты для IT-компаний
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((caseItem, idx) => (
              <Card 
                key={idx}
                className="hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 animate-fade-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <CardHeader>
                  <Badge className="w-fit mb-3 bg-secondary/20 text-secondary border-secondary/30">
                    {caseItem.category}
                  </Badge>
                  <CardTitle className="text-lg">{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{caseItem.result}</p>
                  <div className="flex flex-wrap gap-2">
                    {caseItem.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Услуги и документы</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Прозрачное ценообразование и понятные условия
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((service, idx) => (
              <Card 
                key={idx}
                className="hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-foreground mt-2">
                    {service.price}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Записаться на консультацию</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Обсудим вашу задачу и найдем оптимальное решение
          </p>
          <Card className="border-2">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Опишите задачу</label>
                  <Textarea
                    placeholder="Расскажите о вашей ситуации..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg py-6"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                IT-Lawyer
              </h3>
              <p className="text-muted-foreground">
                Профессиональная юридическая поддержка для IT-бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@it-lawyer.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover:border-primary hover:text-primary">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover:border-primary hover:text-primary">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover:border-primary hover:text-primary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 IT-Lawyer. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
