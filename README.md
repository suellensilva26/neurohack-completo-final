# 🧠 Funil NeuroHack ENEM - Sistema de Vendas Completo

## 📋 **DESCRIÇÃO:**
Funil de vendas completo para estudantes do ENEM, com sistema de pagamento Mercado Pago integrado.

## 🚀 **FUNCIONALIDADES:**
- ✅ VSL (Video Sales Letter) com timer 3 minutos
- ✅ Checkout com cupom 50% OFF (20 segundos)
- ✅ Sistema Mercado Pago completo (PIX, Boleto, Cartão)
- ✅ Validação CPF rigorosa
- ✅ Webhook automático
- ✅ Design responsivo e moderno

## 🛠️ **TECNOLOGIAS:**
- React 18.3.1
- Vite 6.4.0
- TypeScript
- Tailwind CSS
- Framer Motion
- Mercado Pago SDK

## 📦 **INSTALAÇÃO:**
```bash
npm install
npm run dev
```

## 🏗️ **BUILD:**
```bash
npm run build
npm run preview
```

## 🌐 **DEPLOY VERCEL:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Domain: `neurohackenem-funil.vercel.app`

## 🔑 **ENVIRONMENT VARIABLES:**
```bash
NEXT_PUBLIC_MP_PUBLIC_KEY=APP_USR-ffdc65d6-cea9-45b3-b6ad-3024fd36a896
MP_ACCESS_TOKEN=APP_USR-7689299563100038-071019-3ca7375225a53590c7e12206503cfe4d-2547567185
MP_WEBHOOK_SECRET=TqMjTQGmRjUedPdK6DvRVL9PoVKjqTpd
NEXT_PUBLIC_SITE_URL=https://neurohackenem-funil.vercel.app
```

## 🔗 **WEBHOOK MERCADO PAGO:**
```
URL: https://neurohackenem-funil.vercel.app/api/webhook-mercadopago
Eventos: payment
```

## 💰 **SISTEMA DE PAGAMENTO:**
- **PIX:** Desconto automático + QR Code
- **Boleto:** Geração automática
- **Cartão:** Parcelamento 1-12x
- **Validação:** CPF rigorosa em produção

## 📱 **ACESSO:**
- **Local:** http://localhost:3000
- **Produção:** https://neurohackenem-funil.vercel.app

## 🎯 **FLUXO:**
Quiz → VSL → Checkout → Pagamento → Sucesso → Acesso Liberado