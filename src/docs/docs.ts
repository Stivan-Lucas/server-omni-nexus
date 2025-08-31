// src/docs/docs.ts
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

export function setupDocs(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Omni Nexus | Chat seguro e em tempo real')
    .setDescription('Documentação oficial da Omni Nexus API')
    .setVersion('1.0.0')
    .setTermsOfService('https://omninexus.com.br/terms')
    .setContact(
      'Time Omni',
      'https://omninexus.com.br/',
      'suporte@omninexus.com.br',
    )
    .setLicense('Apache-2.0', 'https://www.apache.org/licenses/LICENSE-2.0')
    .setOpenAPIVersion('3.1.0')
    .addServer('https://localhost:4000', 'Local dev server')
    .addServer('https://api.example.com', 'Produção')
    .addTag(
      'Auth',
      'Gerencia o ciclo de vida de credenciais do usuário: criação de conta, login seguro e renovação de tokens JWT via refresh token.',
    )
    .addTag(
      'Users',
      'Gestão do ciclo de vida dos usuários: atualização de dados cadastrais e remoção definitiva (hard delete).',
    )
    .addExtension('x-logo', {
      url: 'https://omninexus.com.br/logo.png',
      altText: 'Omni Nexus Logo',
    })
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Insira o token JWT no formato: Bearer <token>',
      },
      'JWT',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.use(
    '/docs',
    apiReference({
      content: document,
      url: '/api',
      theme: 'purple',
      darkMode: true,
      cdn: 'https://cdn.jsdelivr.net/npm/@scalar/api-reference@latest',
    }),
  );
}
